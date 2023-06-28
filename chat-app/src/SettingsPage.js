import React, { useState } from 'react';

function SettingsPage() {
  const [newMessage, setNewMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    if (newMessage) {
      await fetch('http://localhost:3001/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: newMessage, sender: 'User' }),
      });
      setNewMessage('');
    }
  }

  return (
    <div className="SettingsPage">
      <h1>Settings</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a message"
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default SettingsPage;
