  import React,{useState, useEffect, useContext} from 'react'
  import axios from "axios"
  import { Link } from 'react-router-dom';

  export default function Profilepage() {

  const userInitial = {}; // Initialize user as null

  const [userr, setUser] = useState(userInitial);

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
              console.log(json);
              setUser(json);
          }
        }
        fetchData();
}, []);

  return (  
      <div className='profile-page'>
      <div className='user-image-and-name-part'>
              <img src="/images/pp.jpg" alt="" className='user-image'/>
          <div className="users-name">
              <h1> {userr.name} </h1>
              <h3> PMO | Admin </h3>
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
