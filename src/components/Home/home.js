import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import InterestsPopup from './Interest';
import "./home.css";

function Home({}) {

  const [questions, setQuestions] = useState([]);


  /*Displaying the questions*/
  useEffect(()=>{
    axios.get('http://localhost:5000/questions')
    .then((response) => {
          setQuestions(response.data);
          console.log(response.data)
    })
    .catch((error) => {
          console.error('Error fetching the questions', error)
    })
}, []);

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



  return (
    <>
      <div className="container-home">
        <div className="left-sidebar-home"></div>


<div className="main-content-home">

{questions.toReversed().map((question, index) => (
<div className="post-home">
          


  
  <div className="post-header-home">
    <img
      src="./uploads/Fitness.jpeg"
      alt="Person"
      className="person-image-home"
    />
    <div className="post-info-home">
      <h2>{question.title}</h2>
      <p>Posted by Kammo on August 15, 2023</p>
    </div>
  </div>
  <div className="post-content-home">
    {/* <h1>Hi{question.image[0].data}</h1> */}
  <img
      src={`data:${question.image.contentType};base64,${question.image.data.toString('base64')}`}
      alt="Post"
      className="post-image-home"
    />

    <p>
      {question.body}...
      {showMore && (
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
      )}
    </p>
    <button className="button-home" onClick={toggleContent}>
      {showMore ? "Read Less" : "Read More"}
    </button>
  </div>
</div>
))}
</div>

        {/* <div className="main-content-home">


          <div className="post-home">
            <div className="post-header-home">
              <img
                src="/images/user-image.jpg"
                alt="Person"
                className="person-image-home"
              />
              <div className="post-info-home">
                <h2>Do You Know This Person?</h2>
                <p>Posted by Kammo on August 15, 2023</p>
              </div>
            </div>
            <div className="post-content-home">
              <img
                src="/images/ritik.jpg"
                alt="Post"
                className="post-image-home"
              />
              <p>
                This is the content of the post. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit...
                {showMore && (
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
                )}
              </p>
              <button className="button-home" onClick={toggleContent}>
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>




          <div className="post-home">
            <div className="post-header-home">
              <img
                src="/images/user-image.jpg"
                alt="Person"
                className="person-image-home"
              />
              <div className="post-info-home">
                <h2>Do You Know This Person?</h2>
                <p>Posted by Kammo on August 15, 2023</p>
              </div>
            </div>
            <div className="post-content-home">
              <img
                src="/images/profile-image.jpeg"
                alt="Post"
                className="post-image-home"
              />
              <p>
                This is the content of the post. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit...
                {showMore && (
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </span>
                )}
              </p>
              <button className="button-home" onClick={toggleContent}>
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>


        </div> */}




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