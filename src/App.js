import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";


const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signinsignup">Sign in/ Sign up</Link>
        </li>
        <li>
          <Link to="/forecast">Forecast</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/" component={withRouter(Home)} />
        <Route path="/signinsignup" component={withRouter(SignInSignUp)} />
        <Route path="/forecast" component={withRouter(Forecast)} />
      </Switch>
    </div>
  </Router>
);

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