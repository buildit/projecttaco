import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../components/Nav';
import TacoCrumbs from '../components/TacoCrumbs';
import ViewTitle from '../components/ViewTitle';
import PlaceholderImage from '../components/PlaceholderImage';

class Cart extends Component {
  render() {
    return(
      <div className="view cart">
        <div className="header">
          <div className="back-button">
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


          <div className="pickup-location">
            <h2>Pickup location</h2>
            <div className="content">
              <div className="address">
                <p>123 Union St.</p>
                <p>San Antonio, TX 55555</p>
                <Link to="/location">Change location</Link>
              </div>
              <div className="map">
                <PlaceholderImage width={100} height={100} label=""/>
              </div>
            </div>
          </div>

          <div className="payment-information">
            <h2>Payment information</h2>
            <div className="payment-method">
              <div className="checkbox">
                <input type="checkbox"></input>
              </div>
              <div>
                <h3>Gift card</h3>
                <span>$12.32 remaining</span>
              </div>
            </div>
          </div>

          <div className="place-order">
            <span>Subtotal $25.72</span>
            <button>Place order</button>
          </div>

        </div>
        <Nav />
      </div>
    )
  }
};

export default Cart;
