import React from 'react'

import UserProfile from '../assets/img/profile-pic.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="user-img">
        <img src={UserProfile} alt="Shivam Pic" />
      </div>
      <h2>Made By - Shivam Taneja <br /> Check Me out on</h2>
      <div className="user-details">
        <a href="https://www.linkedin.com/in/shivam-taneja/" target='_blank'>Linkedin</a>
        <a href="https://github.com/shiivamtaneja" target='_blank'>Github</a>
      </div>
    </div>
  )
}

export default Sidebar