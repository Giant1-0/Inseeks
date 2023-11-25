import React, {useState, useEffect } from 'react';
import './request.css';

import axios from 'axios';
export default function Requestquestion() {
  const [questions, setQuestions] = useState([]);

    /*Date format logic*/
    function formatDate(timestamp) {
      const date = new Date(timestamp);
      return `${(date.getMonth() + 1)}/${date.getDate()}/${date.getFullYear()}, ` +
        `${(date.getHours() % 12 || 12)}:${String(date.getMinutes()).padStart(2, '0')} ${date.getHours() < 12 ? 'am' : 'pm'}`;
    }

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

  return (
    <div className='question-root-page'>
      {questions.map((question, index) => (

        <div className="question-request-page">
        
            <div className="item Question-By">
            <h3 className='question-number'> {index + 1} </h3>
            <p className='question'> {question.title}</p>
                  <div className="requestedby">
                  <h4>{question.RequestBy && (<>Posted by {question.RequestBy.fullname}</>
          )} on {formatDate(question.createdAt)}</h4>
                  </div>

            </div>
            <button className="button-item accept-and-post-question">
                  Accept
            </button>
            <button className="button-item reject-the-question">
                  Reject
            </button>
            
        </div>
       ))} 
    </div>
  )
}
