import React from 'react'

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';

import gImg from '../assets/img/g-logo.png'


const SignIn = () => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in ", error);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className='logo' >Welcome to Chat Mingle</span>
        <button onClick={signInWithGoogle}>
          <div className="container">
            <img src={gImg} alt="Google Logo" />
            <span>Sign in with Google</span>
          </div>
        </button >
      </div >
    </div>
  )
}

export default SignIn