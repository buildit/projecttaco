import './assets/stylesheets/main.scss';
import React from 'react';
import { render } from 'react-dom';
import App from './views/App';
import About from './views/About';
import Orders from './views/Orders';
import Landing from './views/Landing';
import Location from './views/Location';
import { Router, Route, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
      <Route path="/about" component={About}/>
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
