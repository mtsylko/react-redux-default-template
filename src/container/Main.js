import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './App.scss'

import HomePage from './home/HomePage'
import LoginPage from './login/LoginPage'
import AboutPage from './about/AboutPage'
import ProfilePage from './profile/ProfilePage'
import LogoutComponent from './logout/LogoutComponent'
import { Redirect } from 'react-router-dom'

const ProtectedRoot = ({ component: Component, ...rest }) => {
  const isAuth = !!localStorage.getItem('token');
  return <Route {...rest} render={(props) => (isAuth ? <Component {...props} /> : <Redirect to='/login'/>)}/>
};

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route path='/login' component={LoginPage}/>
        <ProtectedRoot exact path='/' component={HomePage}/>
        <ProtectedRoot path='/profile' component={ProfilePage}/>
        <ProtectedRoot path='/about' component={AboutPage}/>
        <ProtectedRoot path='/logout' component={LogoutComponent}/>
      </Switch>
    </main>
  );
};

export default Main;