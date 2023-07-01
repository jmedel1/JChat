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
    <div>
      <h2>Chat Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Your Message"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatForm;
