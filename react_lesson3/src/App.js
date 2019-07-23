import React from 'react';
import logo from './logo.svg';
import Users from './components/users/users';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Users />
      </header>
    </div>
  );
}

export default App;