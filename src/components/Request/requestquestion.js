import React, {useState, useEffect } from 'react';
import './request.css';

import axios from 'axios';
export default function Requestquestion() {
  const [questions, setQuestions] = useState([]);

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
                  <h4 className="Asked-By"> Question by, Napoleon D R Dutta</h4>
                  <p className="Date-Asked"> Date: 1:28 pm 24/08/2023 </p>
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
