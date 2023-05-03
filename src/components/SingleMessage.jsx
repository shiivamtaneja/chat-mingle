import React from 'react'

const SingleMessage = ({userImg}) => {
  return (
    <div className='container'>
      <img src={userImg} alt="" />
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