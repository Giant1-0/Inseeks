import React from 'react'

export default function () {
  return (
    <div>
        <div className='comment-container'>
                <div className='comment-post'>
                    <input type='text' className='comment-input' placeholder='Write a comment...'></input>
                    <i className="fa-solid fa-paper-plane fa-lg"></i>
                </div>
                <div className='comment-block-outer'>
                    <div className='comment-body'>
                        comment 1
                    </div>
                    <div className='comment-actions'>
                        <div className='comment-react-inner'>
                            Like
                            <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>
                <div className='comment-block-outer'>
                    <div className='comment-body'>
                        comment 2
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
            </div>
    </div>
  )
}
