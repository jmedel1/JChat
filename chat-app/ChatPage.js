import React, { useEffect, useState } from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulating fetching messages from a server or database
    // Replace this with your own logic to fetch messages
    const fetchMessages = async () => {
      // Simulating an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Dummy data for example
      const dummyMessages = [
        { id: 1, text: 'Hello', user: 'User1' },
        { id: 2, text: 'How are you?', user: 'User2' },
        { id: 3, text: 'I am good. How about you?', user: 'User1' },
      ];

      setMessages(dummyMessages);
    };

    fetchMessages();
  }, []);

  return (
    <div>
      <h1>Chat Page</h1>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>
            <strong>{message.user}: </strong>
            {message.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatPage;
