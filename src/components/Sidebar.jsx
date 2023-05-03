import React from 'react'
import { Link } from 'react-router-dom'

import UserProfile from '../assets/img/profile-pic.png'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="user-img">
        <img src={UserProfile} alt="" />
      </div>
      <h2>Made By - Shivam Taneja</h2>
      <div className="user-details">
        <a href="">Insta</a>
        <a href="">Github</a>
      </div>
      <a href="">Sign Out</a>
      {/* <Link to={""} /> */}
    </div>
  )
}

export default Sidebar