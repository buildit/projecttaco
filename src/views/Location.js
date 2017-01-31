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
          <div className="back-button">
            <img src="../assets/images/back-button.png" />
          </div>
          <div className="header-text">
            Choose a Restaurant
          </div>
          <div className="cart-button">
            <img src="../assets/images/cart-icon.png" />
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
        <div className="list-container">
          <div className="list-item">
            <div className="mile-marker-container">
              <img src="../assets/images/marker-1.png" />
                <div className="miles-text">
                  0.1 MI
                </div>
            </div>
            <div className="list-item-content">
              <div className="location-address">
              18 E. 14th Street New York, NY 10003
              </div>
              <div className="select-location-button">
                <div className="select-location-text">
                  Select Location
                </div>
              </div>
            </div>
            <div className="expand">
              <img src="../assets/images/expand.png" />
            </div>
        </div>
        <div className="list-item">
          <div className="mile-marker-container">
            <img src="../assets/images/marker-2.png" />
              <div className="miles-text">
                0.3 MI
              </div>
          </div>
          <div className="list-item-content">
            <div className="location-address">
            390 8th Avenue New York, NY 10001
            </div>
            <div className="select-location-button">
              <div className="select-location-text">
                Select Location
              </div>
            </div>
          </div>
          <div className="expand">
            <img src="../assets/images/expand.png" />
          </div>
      </div>
      <div className="list-item">
        <div className="mile-marker-container">
          <img src="../assets/images/marker-3.png" />
            <div className="miles-text">
              0.4 MI
            </div>
        </div>
        <div className="list-item-content">
          <div className="location-address">
          18 E. 14th Street New York, NY 10003
          </div>
          <div className="select-location-button">
            <div className="select-location-text">
              Select Location
            </div>
          </div>
        </div>
        <div className="expand">
          <img src="../assets/images/expand.png" />
        </div>
    </div>
      </div>
        <Nav />
      </div>
    </div>
    )
  }
};

export default Location;
