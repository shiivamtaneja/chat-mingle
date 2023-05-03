import React from 'react'

import UserImg from '../assets/img/profile-pic.png'

const SingleMessage = () => {
  return (
    <div className='container'>
      <img src={UserImg} alt="" />
      <div className='user-details'>
        <p className='user-name'>User Name <span>time</span></p>
        <div className="user-message">
          <p>mesage</p>
        </div>
      </div>
    </div>
  )
}

export default SingleMessage