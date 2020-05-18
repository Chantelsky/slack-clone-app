import React from 'react';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Route path="/" />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Router>
    </>
  );
}

export default App;
