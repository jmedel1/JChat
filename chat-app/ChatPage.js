import React, { useEffect, useState } from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

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

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();

    // Create a new message object
    const newMessageObj = {
      id: messages.length + 1,
      text: newMessage,
      user: 'User1', // Replace with the current user or dynamic user
    };

    // Update the messages state with the new message
    setMessages([...messages, newMessageObj]);

    // Clear the newMessage state for the next message
    setNewMessage('');
  };

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
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatPage;
