import React from 'react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './home/HomePage'
import LoginPage from './login/LoginPage'
import AboutPage from './about/AboutPage'

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/login' component={LoginPage}/>
        <Route path='/about' component={AboutPage}/>
      </Switch>
    </main>
  );
};

export default Main;