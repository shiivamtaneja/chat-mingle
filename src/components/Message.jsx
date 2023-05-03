import React, { useEffect, useRef } from 'react'
import SingleMessage from './SingleMessage'

const Message = ({ userImg }) => {

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({ behaviour: "smooth" })
  }, [])

  return (
    <div ref={ref}
      className='container'
    >
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />
      <SingleMessage userImg={userImg} />

    </div>
  )
}

export default Message