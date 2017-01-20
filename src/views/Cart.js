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
        <ViewTitle title="Place your order" />
          <div className="promo">
            <PlaceholderImage width={375} height={200} label="Promo image"/>
            <div>Cinnabon delights | Add to order for $1</div>
            <button>Add to order</button>
          </div>

        <div>

          <div className="cart-header">
            <span>Review order</span>
            <span>13 items</span>
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
