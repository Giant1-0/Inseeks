  import React from 'react'
  import { Link } from 'react-router-dom';

  export default function profilepage({username}) {
    return (
      <div className='profile-page'>
      <div className='user-image-and-name-part'>
              <img src="/images/profile-image.jpeg" alt="" className='user-image'/>
          <div className="users-name">
              <h1> {username}</h1>
              <h3>Software Developer | Admin </h3>
          </div>
      </div>
          <div className="container-for-grid">

      <div className="add-user">
        Add user
      </div>
      <div className="add-user">
        Remove user
      </div>
      <div className="add-user">
        View users
      </div>
      <Link to="/requests">
      <div className="add-user4">
          <p>List of questions</p>
      </div>
      </Link>

      <div className="add-user">
        See message requests
      </div>
      <div className="add-user">
        Manage interest
      </div>
      </div>
      </div>
    )
  }
