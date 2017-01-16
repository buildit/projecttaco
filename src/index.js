import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import About from './components/About';
import Orders from './components/Orders';
import { Router, Route, hashHistory } from 'react-router';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
     {/* add the routes here */}
      <Route path="/about" component={About}/>
      <Route path="/orders" component={Orders}/>
  </Router>
), document.getElementById('root'))
