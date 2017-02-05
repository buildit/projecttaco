import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import ViewTitle from '../components/ViewTitle';
import PlaceholderImage from '../components/PlaceholderImage';
import { browserHistory } from 'react-router';

class Cart extends Component {
  render() {
    return(
      <div className="view-cart">
        <div className="header">
          <div className="back-button" className="back-button" onClick={browserHistory.goBack}>
            <img src="../assets/images/back-button.png" />
          </div>
          <div className="header-text">
            PLACE YOUR ORDER
          </div>
          <div className="cart-button">
            <img src="../assets/images/cart-icon.png" />
          </div>
        </div>
          <div className="promo">
            <div className="add-button-container">
            <div className="button-add">
              <Link to="/location">Add to Order</Link>
            </div>
          </div>
          </div>
        <div>
          <div className="cart-header">
            <div className="triangle"/>
            <div className="review-order">Review  order</div>
            <div className="order-items">13 items</div>
          </div>
          <div className="order-list">
            <div className="order-list-item">
              <span className="count">6</span>
              <span className="desc">Double Stacked Tacos- Nacho Crunch</span>
              <span className="price">$5.00</span>
            </div>
          </div>
          <div className="order-list">
            <div className="order-list-item">
              <span className="count">6</span>
              <span className="desc">Double Stacked Tacos- Nacho Crunch</span>
              <span className="price">$5.00</span>
            </div>
          </div>
          <div className="order-list">
            <div className="order-list-item">
              <span className="count">6</span>
              <span className="desc">Double Stacked Tacos- Nacho Crunch</span>
              <span className="price">$5.00</span>
            </div>
          </div>
          <div className="order-list">
            <div className="order-list-item">
              <span className="count">6</span>
              <span className="desc">Double Stacked Tacos- Nacho Crunch</span>
              <span className="price">$5.00</span>
            </div>
          </div>
          <div className="total-plain">
            <span className="subtotal-plain">
              Subtotal
            </span>
            <span className="amount-plain">
              $11.98
            </span>
          </div>
          <div className="total-plain">
            <span className="subtotal-plain">
              Tax
            </span>
            <span className="amount-plain">
              TBD
            </span>
          </div>
          <div className="total">
            <span className="subtotal">
              Subtotal
            </span>
            <span className="amount">
              $11.98
            </span>
          </div>
          <div className="pick-up">
            <div className="pick-up-location">
              Pick up location
            </div>
            <div className="pick-up-change-location">
            <Link to="/location">  change location </Link>
            </div>
          </div>
          <div className="cart-list-holder">
          <div className="cart-block">
          <div className="cart-info">
            <div className="cart-list-holder-address">
              18 E 14th Street,<br/> New York, NY 10003
            </div>
            <div className="directions">
              get directions
            </div>
          </div>
          <div className="cart-image">
            <img src="../assets/images/map.png" className="cart-image"/>
          </div>
          </div>
        </div>
        <div className="pick-up">
          <div className="pick-up-location">
          payment information
          </div>
        </div>
        <div className="payment">
          <div className="radio-button">
            <img src="../assets/images/radio-button.png" />
          </div>
          <div className="payment-info">
            <span className="cc-info">VISA ****0732</span>
            <br/>
            <span className="cc-exp">Expires 05/2018</span>
          </div>
          <div className="payment-expand">
              <img src="../assets/images/expand.png" />
          </div>
        </div>
        <div className="divider" />
          <div className="payment">
            <div className="radio-button">
              <img src="../assets/images/radio-button.png" />
            </div>
            <div className="payment-info">
              <span className="cc-info">GIFT CARD</span>
              <br/>
              <span className="cc-exp">$12.32 remaining</span>
            </div>
            <div className="payment-expand">
                <img src="../assets/images/expand.png" />
            </div>
          </div>
        </div>
        <Nav />
      </div>
    )
  }
};

export default Cart;
