import React, { useEffect, useState } from 'react'
import { collection, onSnapshot, addDoc, orderBy, query } from "firebase/firestore";
import { db } from '../firebase'


const Input = () => {

  const [messages, setMessage] = useState([])
  const [input, setInput] = useState("")

  const handleInputChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value)
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (input.trim()) {
      await addDoc(collection(db, "messages"), {
        text: input,
        timestamp: new Date(),
        uid: user.uid,
        displayName: user.displayName,
      });
    }
    setInput("")
  }


  useEffect(() => {
    const q = query(collection(db, "message"), orderBy("timestamp"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessage(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data
        }))
      )
    })
    return () => unsubscribe()
  }, [])

  {/* {messages.map(({ id, data }) => (
              <div key={id} className={`message ${data.uid === user.uid ? "sent" : "received"}`}>
                <span className="displayName">{data.displayName}: </span>
                <span className="messageText">{data.text}</span>
              </div>
            ))} */}
  return (
    <form onSubmit={sendMessage} className='input'>
      <input type='text' value={input} onChange={handleInputChange} placeholder='Write a message...' required />
      <div className="send">
        <button type='submit'>Send</button>
      </div>
    </form>
  )
}

export default Input