import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";
import SignInSignUp from "./components/SignInSignUp/SignInSignUp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <SignInSignUp/>
        <Forecast />
      </main>
      <footer>
        Page created with React
      </footer>
    </div>
  );
}

export default App;