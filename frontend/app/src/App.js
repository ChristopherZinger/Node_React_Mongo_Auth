import React from 'react';
import './App.css';

import Signup from './components/auth/Signup/Signup';
import Login from './components/auth/Login/Login';

function App() {
  return (
    <div className="App">
      <h2>My Login App</h2>
      <Signup />
      <Login />
    </div>
  );
}

export default App;
