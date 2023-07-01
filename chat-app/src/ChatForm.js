import React, { useState } from 'react';

const ChatForm = ({ onNewMessage }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new message object
    const newMessage = {
      author: author,
      content: content
    };

    // Pass the new message to the parent component
    onNewMessage(newMessage);

    // Clear the input fields
    setAuthor('');
    setContent('');
  };

  return (
    <div style={{ backgroundColor: '#F94144', padding: '20px', borderRadius: '8px' }}>
      <h2 style={{ color: '#F9C74F', fontFamily: 'MexicanFont', fontSize: '24px' }}>Chat Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          style={{ backgroundColor: '#F3722C', color: '#FFF', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: 'none' }}
        />
        <br />
        <textarea
          placeholder="Your Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ backgroundColor: '#F3722C', color: '#FFF', padding: '10px', borderRadius: '4px', marginBottom: '10px', border: 'none' }}
        ></textarea>
        <br />
        <button type="submit" style={{ backgroundColor: '#F9C74F', color: '#FFF', padding: '10px 20px', borderRadius: '4px', border: 'none' }}>Send</button>
      </form>
    </div>
  );
};

export default ChatForm;
