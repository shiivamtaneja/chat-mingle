import React from 'react'

import UserProfile from '../assets/img/profile-pic.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="user-img">
        <img src={UserProfile} alt="Shivam Pic" />
      </div>
      <h2>Made By - Shivam Taneja</h2>
      <div className="user-details">
        <a href="">Insta</a>
        <a href="">Github</a>
      </div>
    </div>
  )
}

export default Sidebar