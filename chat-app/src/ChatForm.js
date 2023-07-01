import React, { useState } from 'react';

const ChatForm = () => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Input validation
    if (!author || !content) {
      setErrorMessage('Please enter your name and message.');
      return;
    }

    // Make the POST request to json-server
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ author, content }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log(data);

        // Clear the input fields
        setAuthor('');
        setContent('');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again later.');
      });
  };

  return (
    <div>
      <h2>Chat Form</h2>
      {errorMessage && <p>{errorMessage}</p>}
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
