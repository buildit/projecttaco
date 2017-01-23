import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import ViewTitle from '../components/ViewTitle';

class StyleGuide extends Component {
  render() {
    return(
      <div className="view style-guide">
        <ViewTitle title="Style Guide" />
        <div>hey!</div>
        <Nav />
      </div>
    )
  }
};

export default StyleGuide;
