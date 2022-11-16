import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";
import Favorites from "./components/Favorites/Favorites";


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" onClick={() => window.location.href='http://localhost:3000/'}>Home</Link>
          </li>
          {isSignedIn ? (
            <li>
              <Link to="/favorites" onClick={() => window.location.href='http://localhost:3000/favorites'}>Favorites</Link>
            </li>
          ) : (
            <li>
              <Link to="/signinsignup" onClick={() => window.location.href='http://localhost:3000/signinsignup'}>Sign in/ Sign up</Link>
            </li>
          )}

          <li>
            <Link to="/forecast" onClick={() => window.location.href='http://localhost:3000/forecast'}>Forecast</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" component={withRouter(Home)} />
          <Route path="/signinsignup" component={withRouter(SignInSignUp)} />
          <Route path="/forecast" component={withRouter(Forecast)} />
          <Route path="/favorites" component={withRouter(Favorites)} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="App">
    <header className="App-header">
      <h1>Weather App</h1>
    </header>
    <main />
    <footer>
      Page created with React
    </footer>
  </div>
);

export default App;