import React, { useState } from 'react';

function SettingsPage() {
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Logic to save user settings to the server or database
    // You can use the updated 'username', 'avatar', and 'notificationsEnabled' values
    console.log('Updated settings:', {
      username,
      avatar,
      notificationsEnabled
    });
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="avatar">Avatar URL:</label>
          <input
            type="text"
            id="avatar"
            value={avatar}
            onChange={handleAvatarChange}
          />
        </div>
        <div>
          <label htmlFor="notifications">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            checked={notificationsEnabled}
            onChange={handleNotificationsToggle}
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default SettingsPage;
