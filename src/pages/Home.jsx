import React from 'react'

import { auth } from '../firebase'
import { useAuthState } from "react-firebase-hooks/auth";

import SignIn from './SignIn';
import Sidebar from '../components/Sidebar';
import Chat from '../components/Chat'

const Home = () => {
  const [user] = useAuthState(auth)
  return (
    <>
      {!user ? (
        <SignIn />
      ) :
        <div className="home">
          <div className="sidebar">
            <Sidebar />
          </div>
          <Chat userName={user.displayName}/>
        </div>
      }
    </>
  )
}

export default Home