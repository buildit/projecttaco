import './assets/stylesheets/main.scss';
import React from 'react';
import { render } from 'react-dom';
import Orders from './views/Orders';
import Landing from './views/Landing';
import Location from './views/Location';
import Menu from './views/Menu';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

import createStore from './store';
const store = createStore();

render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Landing}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/landing" component={Landing}/>
        <Route path="/location" component={Location}/>
        <Route path="/menu" component={Menu}/>
        {
          /* cart */
          /* payment */
          /* receipt */
          /* history */
        }
    </Router>
  </Provider>
), document.getElementById('root'))
