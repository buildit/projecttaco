import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';

class Location extends Component {
  render() {
    return(
      <div className="view location">
        <TacoCrumbs />
        <h1>Choose pickup location</h1>
        <div className="map-type-picker">
          <span className="map-type active">Map</span>
          <span className="map-type">List</span>
        </div>
        <div className="placeholder">map placeholder</div>
        <div className="button">
          <Link to="/menu">Menu</Link>
        </div>
        <Nav />
      </div>
    )
  }
};

export default Location;
