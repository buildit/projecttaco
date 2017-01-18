import React, { Component } from 'react';
import { Link } from 'react-router';

class Landing extends Component {
  render() {
    return(
      <div className="view landing">
        <h1>Your recent order</h1>
        <div className="landing-image"></div>
        <div className="cta">
          <Link to="/cart">Re-order</Link>
        </div>
        <div className="cta">
          <Link to="/location">New Order</Link>
        </div>
      </div>

    )
  }
};

export default Landing;
