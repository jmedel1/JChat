import React, { useState, useEffect } from 'react';

function ChatPage() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Fetch messages from the backend or an external API
    // You can replace this with your own logic
    const fetchMessages = async () => {
      try {
        // Simulating a fetch request delay with setTimeout
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data for demonstration purposes
        const response = [
          { id: 1, sender: 'John', content: 'Hello' },
          { id: 2, sender: 'Jane', content: 'Hi there' },
        ];

        setMessages(response);
      } catch (error) {
        console.log('Error fetching messages:', error);
      }
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
      sender: 'You', // You can replace this with the user's display name or any other identifier
      content: newMessage,
    };

    // Add the new message to the existing messages array
    setMessages([...messages, newMessageObj]);

    // Clear the input field
    setNewMessage('');
  };

  return (
    <div>
      <h1>Chat Page</h1>
      <div className="message-list">
        {messages.map((message) => (
          <div key={message.id} className="message">
            <strong>{message.sender}: </strong>
            <span>{message.content}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ChatPage;
