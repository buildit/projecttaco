import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import PlaceholderImage from '../components/PlaceholderImage';

class Location extends Component {
  render() {
    return(
      <div className="main-container">
      <div className="view location">
        <div className="header">
          <div className="header-text">
            <span><img src="../assets/images/back-button.png" className="back-button"/></span>
            <span>Choose a Restaurant</span>
            <span><img src="../assets/images/cart-icon.png" className="cart-button"/></span>
          </div>
        </div>
        <div className="map-container">
          <img src="../assets/images/map.png" className="map"/>
        </div>
        <div className="search-container">
          <div className="search-input"></div>
            <div className="button-search">
              <Link to="/cart">Search</Link>
            </div>
        </div>
        <Nav />
      </div>
    </div>
    )
  }
};

export default Location;
