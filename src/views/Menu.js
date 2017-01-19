import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import MenuCategoryList from '../components/MenuCategoryList';

class Menu extends Component {
  render() {
    return(
      <div className="view menu">
        <h1>New order</h1>
        <div className="menu-category-picker">
          <span className="menu-category active">Popular</span>
          <span className="menu-category">Tacos</span>
          <span className="menu-category">Burritos</span>
          <span className="menu-category">Drinks</span>
        </div>
        <MenuCategoryList />
        <Nav />
      </div>
    )
  }
};

export default Menu;
