import React, { useEffect, useState } from 'react';
import SingleMessage from './SingleMessage';
import { onSnapshot, query, orderBy } from 'firebase/firestore';

const Message = ({ userMessages }) => {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    const getData = onSnapshot(
      query(userMessages, orderBy('date', 'asc')),
      (querySnapshot) => {
        querySnapshot.docChanges().forEach((change) => {
          if (change.type === 'added') {
            const data = change.doc.data();
            const id = change.doc.id;
            if (!messages[id]) {
              setMessages((prevMessages) => ({ ...prevMessages, [id]: data }));
            }
          }
        });
      }
    );

    return () => getData();
  }, []);

  return (
    <div className='container'>
      {Object.keys(messages).map((id) => (
        <SingleMessage
          key={id}
          userText={messages[id].text}
          userImg={messages[id].uimg}
          userName={messages[id].displayName}
          messageDate={messages[id].date}
        />
      ))}
    </div>
  );
};

export default Message;
