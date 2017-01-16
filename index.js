import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
import { Router, Route, hashHistory } from 'react-router'
import About from './modules/About'
import OrderConfirmation from './modules/OrderConfirmation'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
     {/* add the routes here */}
      <Route path="/orderConfirmation" component={OrderConfirmation}/>
      <Route path="/about" component={About}/>
  </Router>
), document.getElementById('app'))
