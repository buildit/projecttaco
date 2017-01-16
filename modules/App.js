// modules/App.js
import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Project Taco starter</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/orderConfirmation">Order confirmation</Link></li>
        </ul>
      </div>
    )
  }
})
