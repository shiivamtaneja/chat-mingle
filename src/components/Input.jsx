import React from 'react'

const Input = () => {

  const handleSubmit = () => {
    console.log("mesage")
  }
  return (
    <div className='input'>
      <input type='text' placeholder='Write a message...' required />
      <div className="send">
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default Input