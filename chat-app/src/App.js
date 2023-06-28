import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

function App() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const createMessage = async () => {
    try {
      const response = await axios.post('http://localhost:3001/messages', {
        text: newMessage,
      });
      setMessages([...messages, response.data]);
      setNewMessage('');
    } catch (error) {
      console.error('Error creating message:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Chat</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <div>
              <h1>Chat Page</h1>
              <div>
                {messages.map((message) => (
                  <div key={message.id}>{message.text}</div>
                ))}
              </div>
              <form onSubmit={createMessage}>
                <input
                  type="text"
                  value={newMessage}
                  onChange={handleInputChange}
                  placeholder="Enter your message"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </Route>
          <Route path="/settings">
            <div>
              <h1>Settings Page</h1>
              {/* Add your settings component content here */}
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
