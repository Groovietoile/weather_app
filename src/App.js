import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";
import Favorites from "./components/Favorites/Favorites";


const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [userFavorites, setUserFavorites] = useState([]);
  const [users, setUsers] = useState([]);

  const renderUsers = () => {
    fetch('http://localhost:8000/users')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  useEffect(() => {
    renderUsers();
  }, []);

  useEffect(() => {
    if (!users || !userId) {
      return;
    }
    setUserFavorites(users.filter((user) => user.id === userId)?.map((signedInUser) => signedInUser.favorites)[0]);
    console.log(userFavorites);
  }, [users, userId]);

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
          {isSignedIn ? (
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          ) : (
            <li>
              <Link to="/signinsignup" >Sign in/ Sign up</Link>
            </li>
          )}

          <li>
            <Link to="/forecast" >Forecast</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signinsignup" component={() => (
            <SignInSignUp
              setIsSignedIn={setIsSignedIn}
              users={users}
              setUserId={setUserId}
            />)} />
          <Route path="/forecast" component={() => (<Forecast isSignedIn={isSignedIn} userId={userId} userFavorites={userFavorites}/>)} />
          <Route path="/favorites" component={() => (<Favorites favorites={userFavorites} />)} />
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