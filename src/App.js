import React from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/screens/Home';
import Login from './components/screens/Login';
import Profile from './components/screens/Profile';
import SignUp from './components/screens/SignUp';

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
      <Route path="/signup">
        <SignUp/>
      </Route>
    </BrowserRouter>
  );
}

export default App;
