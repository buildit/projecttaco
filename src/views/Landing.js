import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import PlaceholderImage from '../components/PlaceholderImage';

export default class Landing extends Component {
  render() {
    return(
      <div className="view landing">
        <h1>Welcome back!</h1>
          <img src="../assets/images/logo.png" srcset="./assets/images/logo@2x.png 2x, ./assets/images/logo@3x.png 3x" class="Logo"></img>
        <PlaceholderImage width={500} height={300} label="Huge taco comin' atcha"/>
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
