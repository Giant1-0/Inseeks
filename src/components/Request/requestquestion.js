import React from 'react'
import './request.css'
export default function requestquestion() {
  return (
    <div className='question-root-page'>
        <div className="question-request-page">
        
            <div className="item Question-By">
            <h3 className='question-number'>1</h3>
            <p className='question'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, distinctio.?</p>
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
        <div className="question-request-page">
        
        <div className="item Question-By">
        <h3 className='question-number'>2</h3>
              <p className='question'> How to make a joint?</p>
              <div className="requestedby">
              <h4 className="Asked-By"> Question by, XYZ</h4>
              <p className="Date-Asked"> Date: 2:30 pm 24/08/2023 </p>
              </div>

        </div>
        <button className="button-item accept-and-post-question">
              Accept
        </button>
        <button className="button-item reject-the-question">
              Reject
        </button>
        
    </div>
    <div className="question-request-page">
        
        <div className="item Question-By">
        <h3 className='question-number'>3</h3>
              <p className='question'> How to learn guitar?</p>
              <div className="requestedby">
              <h4 className="Asked-By"> Question by, Kamallochan Boruah</h4>
              <p className="Date-Asked"> Date: 2:25 pm 24/08/2023 </p>
              </div>

        </div>
        <button className="button-item accept-and-post-question">
              Accept
        </button>
        <button className="button-item reject-the-question">
              Reject
        </button>
        
    </div>
    </div>
  )
}


