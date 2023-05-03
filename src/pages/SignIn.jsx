import React, { useState } from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase"

import gImg from '../assets/img/g-logo.png'

const SignIn = () => {

  const [logedin, setLogedIn] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        setLogedIn(result.user)
        console.log(result)
      }).catch((error) => {
        const errorCode = error.code;
        console.log(errorCode)
      });
  }
  return (
    <>
      {
        logedin ?
          <div className="home">
            <Sidebar />
            <Chat userName={logedin.displayName} userImg={logedin.photoURL} />
          </div> :
          <div className="formContainer">
            <div className="formWrapper">
              <span className='logo' >Welcome to Chat Mingle</span>
              <button onClick={handleSubmit}>
                <div class="container">
                  <img src={gImg} alt="Google Logo" />
                  <span>Sign in with Google</span>
                </div>
              </button >
            </div >
          </div >
      }
    </>
  )
}

export default SignIn