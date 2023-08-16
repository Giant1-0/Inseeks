import React, { useState } from 'react';
import InterestsPopup from './Interest';
import "./home.css";

function Home() {


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
      <div className="container">
        <div className="left-sidebar"></div>



        <div className="main-content">


          <div className="post">
            <div className="post-header">
              <img
                src="/images/user-image.jpg"
                alt="Person"
                className="person-image"
              />
              <div className="post-info">
                <h2>Do You Know This Person?</h2>
                <p>Posted by Kammo on August 15, 2023</p>
              </div>
            </div>
            <div className="post-content">
              <img
                src="/images/ritik.jpg"
                alt="Post"
                className="post-image"
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
              <button onClick={toggleContent}>
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>




          <div className="post">
            <div className="post-header">
              <img
                src="/images/user-image.jpg"
                alt="Person"
                className="person-image"
              />
              <div className="post-info">
                <h2>Do You Know This Person?</h2>
                <p>Posted by Kammo on August 15, 2023</p>
              </div>
            </div>
            <div className="post-content">
              <img
                src="/images/profile-image.jpeg"
                alt="Post"
                className="post-image"
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
              <button onClick={toggleContent}>
                {showMore ? "Read Less" : "Read More"}
              </button>
            </div>
          </div>


        </div>




        <div className="right-sidebar">
    
        <div className="interest">
          <h2>Interests</h2>
          <ul>
            {rightSidebarInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
          <button onClick={openPopup}>Add Interests</button>
          {showPopup && (
            <InterestsPopup onClose={closePopup} addInterest={addInterestToSidebar} />
           )}
        </div>

        <div className="btn-sidebar">
          <button>Add a question</button>

          
        </div>

        
        
        </div>
       
        
      </div>
    </>
  );
}

export default Home;
