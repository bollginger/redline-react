import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import CurrentPrompts from '../pages/CurrentPrompts';
import CurrentIssue from '../pages/CurrentIssue';
import Shop from '../pages/Shop';
import Archive from '../pages/Archive';

const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route exact path='/currentissue' component={CurrentIssue}></Route>
      <Route exact path='/shop' component={Shop}></Route>
      <Route exact path='/currentprompts' component={CurrentPrompts}></Route>
      <Route exact path='/archive' component={Archive}></Route>
    </Switch>
  );


export default Main;