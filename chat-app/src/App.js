import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ChatRoom from './components/ChatRoom';
import ChatForm from './components/ChatForm';

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

        <Route exact path="/" component={Home} />
        <Route path="/chat" component={ChatRoom} />
        <Route path="/chat-form" component={ChatForm} />
      </div>
    </Router>
  );
};

export default App;
