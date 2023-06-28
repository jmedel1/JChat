import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
          <Route exact path="/" component={ChatPage} />
          <Route path="/settings" component={SettingsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

