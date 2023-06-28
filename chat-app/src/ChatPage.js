import React, { useState, useEffect } from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetchMessages();
  }, []);

  async function fetchMessages() {
    const response = await fetch('http://localhost:3001/messages');
    const data = await response.json();
    setMessages(data);
  }

  return (
    <div className="ChatPage">
      <h1>Chat Room</h1>
      <ul>
        {messages.map(message => (
          <li key={message.id}>
            <strong>{message.sender}:</strong> {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatPage;
