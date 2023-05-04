import React from 'react'
import MessageDate from './MessageDate'

const SingleMessage = ({ userName, userText, userImg, messageDate }) => {
  return (
    <div className='singleContainer'>
      <img src={userImg} alt={userName} />
      <div className='user-details'>
        <p className='user-name'>{userName} <MessageDate messageDate={messageDate} /></p>
        <div className="user-message">
          <p>{userText}</p>
        </div>
      </div>
    </div>
  )
}

export default SingleMessage