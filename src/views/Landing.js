import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import PlaceholderImage from '../components/PlaceholderImage';

class Landing extends Component {
  render() {
    return(
      <div className="view landing">
        <TacoCrumbs />
        <h1>Your recent order</h1>
        <PlaceholderImage width={500} height={300} label="Photo representing your last order"/>
        <div className="button">
          <Link to="/cart">Re-order</Link>
        </div>
        <div className="button">
          <Link to="/location">New Order</Link>
        </div>
        <Nav />
      </div>
    )
  }
};

export default Landing;
