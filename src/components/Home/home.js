  import React, { useState, useEffect } from 'react';
  import IconButton from '@mui/material/IconButton';
  import SendIcon from '@mui/icons-material/Send';
  import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
  import FavoriteIcon from '@mui/icons-material/Favorite';
  import axios from 'axios';
  import { Link } from 'react-router-dom';
  import io from 'socket.io-client';


  import InterestsPopup from './Interest';
  import "./home.css";
  import "./Comments.css"
  function Home({}) {

    /*Displaying the questions*/
    const [questions, setQuestions] = useState([]);
    const [comments, setComments] = useState([]);
    const [currId, serCurrQId] = useState('');
    const [socket, setSocket] = useState(null);
    // const [like, setLike] = useState(false);
    const [likes, setLikes] = useState({});



    useEffect(()=>{
      axios.get('http://localhost:5000/questions')
      .then((response) => {
            setQuestions(response.data);
            console.log("hey hey hey",response.data)
      })
      .catch((error) => {
            console.error('Error fetching the questions', error)
      })
  }, []);

  /*To get the comments*/
 
    /*Toggle Logic*/
    const [showMore, setShowMore] = useState(false);
    const toggleContent = () => {
      setShowMore(!showMore);
    };
    const [showPopup, setShowPopup] = useState(false);
    const [rightSidebarInterests, setRightSidebarInterests] = useState([]);
    const addInterestToSidebar = (interests) => {
      setRightSidebarInterests([...rightSidebarInterests, ...interests]);
    };
    const openPopup = () => {
      setShowPopup(true);
    };
    const closePopup = () => {
      setShowPopup(false);
    };

    /*Date format logic*/
    function formatDate(timestamp) {
      const date = new Date(timestamp);
      return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}, ` +
        `${(date.getHours() % 12 || 12)}:${String(date.getMinutes()).padStart(2, '0')} ${date.getHours() < 12 ? 'am' : 'pm'}`;
    }

    /*Getting User Data*/
    const userInitial = {}; // Initialize user as null
    const [userr, setUser] = useState(userInitial);
    const user = userr.id
    useEffect( () => {
      const fetchData = async () => {
              const response = await fetch(`http://localhost:5000/api/getuser`, {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                      "auth-token": localStorage.getItem('token')
                  },
              });
              if (response.ok) {
                const json = await response.json();
                // console.log(json);
                setUser(json);
            }
          }
          fetchData();
  }, []);


  useEffect(() => {
    const likedPosts = JSON.parse(localStorage.getItem('likedPosts'));
    if (likedPosts) {
      setLikes(likedPosts);
    }
  }, []);

  // Function to update local storage with liked posts
  const updateLocalStorage = (likedPosts) => {
    localStorage.setItem('likedPosts', JSON.stringify(likedPosts));
  };


// Function to fetch updated like count for a specific question
const fetchUpdatedLikeCount = async (postId) => {
  try {
    const response = await axios.get(`http://localhost:5000/post/likeCount/${postId}`);
    console.log('count is', response.data)
    return response.data; // Assuming the server returns likeCount in the response
  } catch (error) {
    console.error(error);
    return 0;
  }
};


  const toggleLike = async (postId) => {
    const isLiked = likes[postId] || false;
    console.log("checking out",isLiked)

    const userDetails ={
      qid: postId,
      uid: user,
      trueOrFalse: isLiked //false means liked, true means disliked
    }
try {
    await axios.post('http://localhost:5000/post/like',userDetails)
    .then((response)=>{
      console.log(response)
    }).catch((err)=>{
      console.log(err)
    })
    const updatedLikeCount = await fetchUpdatedLikeCount(postId);

    setLikes((prevLikes) => {
      const updatedLikes = { ...prevLikes };
      updatedLikes[postId] = !updatedLikes[postId];
      updateLocalStorage(updatedLikes); // Update local storage with updated liked posts
      return updatedLikes;
    });
        // Update the question's like count in state
        setQuestions((prevQuestions) =>
        prevQuestions.map((question) =>
          question._id === postId ? { ...question, likesCount: updatedLikeCount } : question
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  // Fetch updated like counts for all questions when the component mounts
useEffect(() => {
  const fetchAllUpdatedLikeCounts = async () => {
    const updatedQuestions = await Promise.all(
      questions.map(async (question) => {
        const updatedLikeCount = await fetchUpdatedLikeCount(question._id);
        return { ...question, likesCount: updatedLikeCount };
      })
    );
    setQuestions(updatedQuestions);
  };

  fetchAllUpdatedLikeCounts();
}, []);

    /*Socket Connecton*/
    useEffect(() => {
      const socketInstance = io('http://localhost:5000');
      setSocket(socketInstance);
    
      // listen for events emitted by the server
    
      socketInstance.on('connect', () => {
        console.log('Connected to server');
      });
    
      socketInstance.on('chat message', async (data) => {
          // console.log('Recieved message',data);
          setComments((prevComments) => [...prevComments, data]);
      });
    
      return () => {
        if (socketInstance) {
          socketInstance.disconnect();
        }
      };
    }, []);
    //After adding the comments
    console.log("Here is the comments",comments)

    /*Doing post request to save the comments*/
    const [body, setBody] = useState('');

    const handleBodyChange = (event) => {
      setBody(event.target.value);
    };
    const fetchComments = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/comments/${currId}`); // Replace with your API endpoint for fetching comments
        if (response.status === 200) {
          setComments(response.data);

        }
      } catch (error) {
        console.error(error);
      }
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      const commentdetail = {
        body: body,
        qid: currId,
        uid: user
      } //Form data was not working I think because there was no media files
      
      await  fetchComments()
      // fetchComments();
      socket.emit('chat message',commentdetail)
      
      axios.post('http://localhost:5000/post/comment',commentdetail)
      .then((response) => {
        if(response.status == 200) {
          // console.log("Success")
          // console.log(response.data)
          setBody('');
        }
      }).catch((err) => {
        console.log(err.response)
      })
    };


    return (
      <>
        <div className="container-home">
          <div className="left-sidebar-home"></div>


  <div className="main-content-home">

  {questions.toReversed().map((question, index) => (
  <div className="post-home" onDoubleClick={()=>toggleLike(question._id)}>
    <div className="post-header-home">
      <img
        src="images/user-image.jpg"
        alt="Person"
        className="person-image-home"
      />
      <div className="post-info-home">
        <h2>{question.title} {question.body}</h2>
        <p>{question.RequestBy && (<>Posted by {question.RequestBy.fullname}</>
          )} on {formatDate(question.createdAt)}</p>
      </div>
      
    </div>
    <div className="post-content-home">
    <img
        src={`${process.env.PUBLIC_URL}/uploads/${question.image}`}
        alt="Post"
        className="post-image-home"
      />
     <div className='like-and-count'> 
     <span className='counting-like'> {question.likesCount}</span>
     {
      likes[question._id]?      
      <>
      <IconButton 
      className={`like-button liked`}
      style={{color:'#516759'}} onClick={()=>toggleLike(question._id)}> 
      <FavoriteIcon/>
      </IconButton>
      </> :
      <>
      {/* <span className='counting-like'>{question.likes.length}</span> */}
      <IconButton 
      className={`like-button`}
      style={{color:'#516759'}} onClick={()=>toggleLike(question._id)}> 
      <FavoriteBorderIcon/>
      </IconButton>
      </>
     }
     </div>
      <p>
        {question.body}...
        {showMore && (
          <>
            <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
            occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </span>
    <div className='comment-container'>
    <div className='comment-post'>
    <form onSubmit={handleSubmit} className='home-page-comment-form'>
        <input 
        type='text' 
        id="post-body"
        className='comment-input'
        placeholder='Write a comment...'
        value={body}
        onChange={handleBodyChange}
        />
        <IconButton className="button-comment-post" type="submit" 
        onClick={()=> serCurrQId(question._id)}>
        <SendIcon style={{color:'#516759'}} />
        </IconButton>
    </form>
    </div>

    {
    Array.isArray(comments) && comments.length > 0 ? (
      <>
    {comments
    .filter((comment)=>comment.qid===question._id)
    .map((comment, commentIndex) => (
    <div className='comment-block-outer'>
        <b>{comment.user} </b>
        <div className='comment-body'>
          {comment.body}
        </div>

        <div className='comment-actions'>
            <div className='comment-react-inner'>
                Like
                <i class="fa-regular fa-heart"></i>
            </div>
            <div className='comment-react-inner'>
                Edit
                <i class="fa-regular fa-pen-to-square"></i>
            </div>
        </div>
    </div>
    ))}
    </>
    ):(
      <>
      {question.answers && (
    <>
    {question.answers.map((comment, commentIndex) => (
    <div className='comment-block-outer'>
        <b> {comment.User.fullname} </b>
        <div className='comment-body'>
          {comment.body}
        </div>
        <div className='comment-actions'>
            <div className='comment-react-inner'>
                Like
                <i class="fa-regular fa-heart"></i>
            </div>
            <div className='comment-react-inner'>
                Edit
                <i class="fa-regular fa-pen-to-square"></i>
            </div>
        </div>
    </div>
    ))}
        </>
    )}
      </>
    )}
  </div>
  </>
  )} 
    </p>
      <button className="button-home" onClick={toggleContent}>
        {showMore ? "Read Less" : "Read More"}
      </button> 

    </div>
  </div>
  ))}
  </div>
          <div className="right-sidebar-home">    
          <div className="interest-home">
            <h2>Interests</h2>
            <ul>
              {rightSidebarInterests.map((interest, index) => (
                <li key={index}>{interest}</li>
              ))}
            </ul>
            <button className="button-home" onClick={openPopup}>Add Interests</button>
            {showPopup && (
              <InterestsPopup onClose={closePopup} addInterest={addInterestToSidebar} />
            )}
          </div>
          <div className="btn-sidebar-home">
            <Link to="/post"><button className="button-home">Add a question</button> </Link>
          </div>
          </div>
        </div>
      </>
    );
  }

  export default Home;