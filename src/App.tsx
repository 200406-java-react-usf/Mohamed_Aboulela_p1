import React, {useState} from 'react';
import './App.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NavbarComponent from './components/NavbarComponent';
import LoginComponent from './components/LoginComponent';
import HomeComponent from './components/HomeComponent';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {User} from './models/user';
import UserComponent from './components/UserComponent';
import ReimbursementComponent from './components/ReimbursementComponent';

function App() {

  //@ts-ignore
  const [authUser, setAuthUser] = useState(null as User);

  return (
    <>
    <Router>

      <AppBar color = "primary" position = "static">
        <Toolbar>                           
          <Typography variant = "h5" color = "inherit">
            <NavbarComponent authUser = {authUser} setAuthUser = {setAuthUser}/>
          </Typography>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path = "/login" render = {() => <LoginComponent authUser = {authUser} setAuthUser = {setAuthUser}/>}/>
        <Route path = "/home" render = {() => <HomeComponent authUser = {authUser}/>}/>
        <Route path = "/users" render = {() => <UserComponent authUser = {authUser}/>}/>
        <Route path = "/reimbursments" render = {() => <ReimbursementComponent authUser = {authUser}/>}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
