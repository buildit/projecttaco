import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import ViewTitle from '../components/ViewTitle';
import MenuItemList from '../components/MenuItemList';
import MenuCategoryList from '../components/MenuCategoryList';
import { browserHistory } from 'react-router';

class Menu extends Component {
  render() {
    return(
      <div className="view-menu">
        <div className="header">
          <div className="back-button" className="back-button" onClick={browserHistory.goBack}>
            <img src="../assets/images/back-button.png" />
          </div>
          <div className="header-text">
            NEW ORDER
          </div>
          <div className="cart-button">
            <Link to="/cart"><img src="../assets/images/cart-icon.png" /></Link>
          </div>
        </div>
        <MenuCategoryList />
        <MenuItemList />
        <Nav />
      </div>
    )
  }
};

export default Menu;
