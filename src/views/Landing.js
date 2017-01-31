import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import PlaceholderImage from '../components/PlaceholderImage';

export default class Landing extends Component {
  render() {
    return(
      <div className="main-container">
      <div className="landing-container">
        <div className="logo">
          <img src="../assets/images/logo.png"
            srcset="./assets/images/logo@2x.png 2x,
            ./assets/images/logo@3x.png 3x"
            />
        </div>
          <img src="../assets/images/welcome-back.png"
              srcset="./assets/images/welcome-back@2x.png 2x,
              ./assets/images/welcome-back@3x.png 3x"
              className="welcome"/>
            <div className="button-container">
        <div className="button-pink">
          <Link to="/cart">Recent Orders</Link>
        </div>
        <div className="button">
          <Link to="/location">New Order</Link>
        </div>
        </div>
        <div>
        <Nav />
        </div>
      </div>
      </div>
    )
  }
};
