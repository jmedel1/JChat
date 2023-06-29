import React from 'react';
import ChatPage from './ChatPage';
import SettingsPage from './SettingsPage';

function App() {
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
            <ChatPage />
          </Route>
          <Route path="/settings">
            <SettingsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

