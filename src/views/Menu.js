import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import ViewTitle from '../components/ViewTitle';
import MenuItemList from '../components/MenuItemList';
import MenuCategoryList from '../components/MenuCategoryList';
import TacoCrumbs from '../components/TacoCrumbs';
import { browserHistory } from 'react-router';

class Menu extends Component {
  render() {
    return(
      <div className="view-menu">
      <TacoCrumbs
        viewName="new order"
        />
        <MenuCategoryList />
        <MenuItemList />
        <Nav />
      </div>
    )
  }
};

export default Menu;
