import React, { Component } from 'react';
import { Link } from 'react-router';

class Landing extends Component {
  render() {
    return(
      <div className="view landing">
        <h1>Your recent order</h1>
        <div className="landing-image"></div>
        <div className="button">
          <Link to="/cart">Re-order</Link>
        </div>
        <div className="button">
          <Link to="/location">New Order</Link>
        </div>
        <div className="nav">
          <span className="nav-item">home</span>
          <span className="nav-item">history</span>
          <span className="nav-item">location</span>
        </div>
      </div>

    )
  }
};

export default Landing;
