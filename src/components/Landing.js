import React, { Component } from 'react';
import { Link } from 'react-router';

class Landing extends Component {
  render() {
    return(
      <div>
        <h1>Landing</h1>
        <Link to="/location">New Order</Link>
      </div>

    )
  }
};

export default Landing;
