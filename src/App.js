import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        hi
        <Route path="/" />
        <Route path="/login" />
        <Route path="/register" />
      </Router>
    </>
  );
}

export default App;
