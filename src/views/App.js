import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return(
      <div>
      <h1>Hello, Taco!</h1>
        <ul role="nav">
            <li><Link to="/about">About Tacos</Link></li>
            <li><Link to="/orders">Orders</Link></li>
          </ul>
      </div>
    )
  }
};

export default App;
