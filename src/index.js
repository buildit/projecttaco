import './assets/stylesheets/main.scss';
import React from 'react';
import { render } from 'react-dom';
import Orders from './views/Orders';
import Landing from './views/Landing';
import Location from './views/Location';
import { Router, Route, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={Landing}/>
      <Route path="/orders" component={Orders}/>
      <Route path="/landing" component={Landing}/>
      <Route path="/location" component={Location}/>
      {
        /* menu */
        /* cart */
        /* payment */
        /* receipt */
        /* history */
      }
  </Router>
), document.getElementById('root'))
