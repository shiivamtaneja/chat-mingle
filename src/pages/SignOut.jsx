import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

const Signout = () => {
  return (
    <div className="signOut">
      <button onClick={() => signOut(auth)}>
        <div className="container">
          <span>SignOut</span>
        </div>
      </button >
    </div>
  );
}

export default Signout