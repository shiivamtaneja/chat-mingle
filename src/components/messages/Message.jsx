import React, { useEffect, useState } from 'react'

import SingleMessage from './SingleMessage'
import { onSnapshot, query, orderBy } from 'firebase/firestore';



const Message = ({ userMessages }) => {

  const [value, setValue] = useState([]);
  const [renderedIds, setRenderedIds] = useState([])

  useEffect(() => {
    const messages = [];

    const getData = onSnapshot(
      query(userMessages, orderBy("date", "asc")), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (!renderedIds.includes(doc.id)) {
            messages.push(data);
            setRenderedIds((prevIds) => [...prevIds, doc.id]);
          }
          messages.push(doc.data());
        });
        setValue((prevValue) => [...prevValue, ...messages]);
      }
    );

    return () => getData();
  }, [renderedIds]);

  return (
    <div className='container'>
      {value.map((message, index) => (
        <SingleMessage
          key={index}
          userText={message.text}
          userImg={message.uimg}
          userName={message.displayName}
          messageDate={message.date}
        />
      ))}
    </div>
  )
}

export default Message