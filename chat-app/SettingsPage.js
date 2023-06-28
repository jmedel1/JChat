import React, { useState } from 'react';

function SettingsPage() {
  const [displayName, setDisplayName] = useState('');

  const handleDisplayNameChange = (e) => {
    setDisplayName(e.target.value);
  };

  const handleSaveSettings = (e) => {
    e.preventDefault();

    // Save the display name to the backend or perform any necessary actions
    // You can replace this with your own logic

    // Display a success message or perform any additional actions as needed
    alert('Settings saved!');
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <form onSubmit={handleSaveSettings}>
        <label>
          Display Name:
          <input
            type="text"
            value={displayName}
            onChange={handleDisplayNameChange}
          />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default SettingsPage;
