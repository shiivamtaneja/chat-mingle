import React from 'react'
import Message from './Message'
import Input from './Input'

const Chat = ({ userName, userImg }) => {
  return (
    <div className='container'>
      <h2 className='heading'>Welcome to Chat Mingle | {userName}</h2>
      <div className='messages' >
        {/* <Message userImg={userImg} /> */}
      </div>
      <Input />
    </div>
  )
}

export default Chat