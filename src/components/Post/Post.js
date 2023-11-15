import React, { useState, useEffect } from 'react';
import {Routes, Route, useNavigate, Link} from 'react-router-dom';

import axios from 'axios';


import './Post.css';
//http://localhost:5000/api/login
export default function Post(){

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);


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



  const uid = userr.id;

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',title);
    formData.append('body',body);
    formData.append('uid',uid);

    // if (image) {
    //   formData.append('image', image); Inaffective approach since multiple images might have the same name.
    // }

    if (image) {
      // Append a timestamp to the image file name to make it unique
      const uniqueFilename = `${Date.now()}_${image.name}`;
      formData.append('image', new File([image], uniqueFilename));
    }
    try {
      const response = await axios.post(
        'http://localhost:5000/post/questionrequest',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'auth-token': localStorage.getItem('token'), // Add this line if needed
          },
        }
      );
  
      if (response.status === 200) {
        console.log(response);
        console.log("navigating")
        navigate('/');
      }
    } catch (err) {
      console.log(err.response);
    }
  };

    return(
        <>
        <div className="upper-post">
            <h2 className="post-heading-post">Write a question ...</h2>
        </div>
        <form className="form-post" 
        onSubmit={handleSubmit} 
        encType='multipart/form-data'>
    <div>
      <label htmlFor="title-post">Post Title:</label>
      <input
        type="text"
        id="title-post"
        value={title}
        onChange={handleTitleChange}
      />
    </div>
    <div>
      <label htmlFor="body-post">Post Body:</label>
      <textarea
        id="body-post"
        value={body}
        onChange={handleBodyChange}
        // required
        rows={6}
      />
    </div>
    <div>
      <label htmlFor="image-post">Image:</label>
      <input
        type="file"
        name="image"
        id="image-post"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
    {/* <Link to="/"> */}
      <button className="button-post" type="submit">Submit</button>
      {/* </Link> */}
  </form>
        </>
    )
}