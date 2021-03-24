import React from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="signup">
        <Signup/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
