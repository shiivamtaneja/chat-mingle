import React from 'react'
import Message from './Message'
import Input from './Input'

const Chat = () => {
  return (
    <div className='container'>
      <h2 className='heading'>Welcome to Chat Mingle</h2>
      <div className='messages' >
        <Message />
      </div>
      <Input />
    </div>
  )
}

export default Chat