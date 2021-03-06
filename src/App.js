import React, {useEffect, createContext, useReducer, useContext} from 'react';
import Navbar from './components/Navbar';
import "./App.css";
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import Home from './components/screens/Home';
import SignIn from './components/screens/SignIn';
import Profile from './components/screens/Profile';
import SignUp from './components/screens/SignUp';
import CreatePost from './components/screens/CreatePost';
import { reducer, initialState} from './reducers/userReducer';

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); //user yang disimpan dilocal storage
    // console.log(typeof(user), user);
    if (user) {
      dispatch({type:"USER", playload:user})
      // history.push('/')
    } else {
      history.push('/signin')
    }
  },[])
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/signin">
        <SignIn/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
      <Route path="/signup">
        <SignUp/>
      </Route>
      <Route path="/create">
        <CreatePost/>
      </Route>
    </Switch>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing/>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
