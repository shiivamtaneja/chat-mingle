import React from 'react'

const Input = ({ sendMessage, input, handleInputChange }) => {
  return (
    <form onSubmit={sendMessage} className='input'>
      <input type='text' value={input} onChange={handleInputChange} placeholder='Write a message...' required />
      <button type='submit' className="send">Send</button>
    </form>
  )
}

export default Input