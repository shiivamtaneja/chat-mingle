import React, { useState } from 'react'

import { collection, setDoc, doc } from "firebase/firestore";
import { db } from '../firebase'

import Signout from '../pages/SignOut'
import Input from './Input';
import Message from './messages/Message';


const Chat = ({ user }) => {

  const messageDate = new Date()
  let year = messageDate.getFullYear();
  let month = messageDate.getMonth() + 1;
  let day = messageDate.getDate();
  let hours = messageDate.getHours();
  let minutes = messageDate.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;

  let dateTimeArray = [day, month, year, hours, minutes, ampm];


  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const userMessages = collection(db, "userMessages");

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      if (input.trim()) {
        const docData = {
          text: input,
          date: dateTimeArray,
          uid: user.uid,
          displayName: user.displayName,
          uimg: user.photoURL
        }
        await setDoc(doc(userMessages), docData)
      }
      setInput("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
      <div className="headingWrapper">
        <h2 className='heading'>Welcome to Chat Mingle | {user.displayName} </h2>
        <span><Signout /></span>
      </div>
      <div className='messages' >
        <div className="container">
          <Message userMessages={userMessages} />
        </div>
      </div>
      <Input sendMessage={sendMessage} input={input} handleInputChange={handleInputChange} />
    </div>
  )
}

export default Chat