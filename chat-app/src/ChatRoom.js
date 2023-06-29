import React, { useState, useEffect } from 'react';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Fetch messages from json-server
    fetch('http://localhost:3000/messages')
      .then((response) => response.json())
      .then((data) => {
        // Update state with the retrieved messages
        setMessages(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div>
      <h2>Chat Room</h2>
      {messages.map((message) => (
        <div key={message.id}>
          <strong>{message.author}: </strong>
          {message.content}
        </div>
      ))}
    </div>
  );
};

export default ChatRoom;
