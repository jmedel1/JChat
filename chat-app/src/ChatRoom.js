import React from 'react';

const ChatRoom = ({ messages }) => {
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
