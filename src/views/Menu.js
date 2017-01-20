import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import MenuCategoryList from '../components/MenuCategoryList';
import MenuItemList from '../components/MenuItemList';
import ViewTitle from '../components/ViewTitle';

class Menu extends Component {
  render() {
    return(
      <div className="view menu">
        <ViewTitle title="New order" />
        <MenuCategoryList />
        <MenuItemList />
        <Nav />
      </div>
    )
  }
};

export default Menu;
