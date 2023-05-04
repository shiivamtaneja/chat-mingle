import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';

const Signout = () => {
    return (
        auth.currentUser && (
            <button onClick={() => signOut(auth)}>Sign out</button>
        )
    );
}

export default Signout