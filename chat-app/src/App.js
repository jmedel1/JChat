import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import ChatForm from './ChatForm';
import ChatRoom from './ChatRoom';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/chat">Chat Room</Link>
            </li>
            <li>
              <Link to="/chat-form">Chat Form</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatRoom />} />
          <Route path="/chat-form" element={<ChatForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
