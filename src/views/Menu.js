import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import ViewTitle from '../components/ViewTitle';
import MenuItemList from '../components/MenuItemList';
import MenuCategoryList from '../components/MenuCategoryList';
import TacoCrumbs from '../components/TacoCrumbs';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';

class Menu extends Component {
  render() {
    return(
      <div className="view-menu">
      <TacoCrumbs
        viewName="new order"
        cartCount={this.props.cartCount}
        />
        <MenuCategoryList />
        <MenuItemList />
        <Nav />
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    cartCount: state.cartCount
  }
}
const mapDispatchToProps = () => {
  return {}
}
const ConnectedMenu = connect (mapStateToProps, mapDispatchToProps) (Menu)

export default ConnectedMenu;
