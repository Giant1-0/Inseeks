import React, { useState } from 'react';
import './Post.css';

export default function Post(){
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleVideoChange = (event) => {
    setVideo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can use this data to send to a server or perform other actions
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body);
    formData.append('image', image);
    formData.append('video', video);

    console.log('Form data:', formData);

    // Reset the form
    setTitle('');
    setBody('');
    setImage(null);
    setVideo(null);
  };
    return(
        <>
        <div className="upper">

            <h2 className="post-heading">Write a question ...</h2>

        </div>

        <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="title">Post Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
        required
      />
    </div>
    <div>
      <label htmlFor="body">Post Body:</label>
      <textarea
        id="body"
        value={body}
        onChange={handleBodyChange}
        required
        rows={6}
      />
    </div>
    <div>
      <label htmlFor="image">Image:</label>
      <input
        type="file"
        id="image"
        accept="image/*"
        onChange={handleImageChange}
      />
    </div>
    <div>
      <label htmlFor="video">Video:</label>
      <input
        type="file"
        id="video"
        accept="video/*"
        onChange={handleVideoChange}
      />
    </div>
    <button type="submit">Submit</button>
  </form>
        

        </>
    )
}