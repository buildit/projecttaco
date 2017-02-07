import React, { Component } from 'react';
import QuantityPicker from './QuantityPicker';

const MenuItem = ({ name, price, coins, imageUrl, quantity = 0 }) => (
    <div className="menu-item">
      <img src={imageUrl} className="menu-image"/>
      <div className="info">
          <span className="name">{name}</span>
          <span className="price">{price}</span>
      </div>
      <div className="coins">
        <span>
          <img src="../assets/images/taco-coin.png" />
          {coins}
        </span>
      </div>
      <QuantityPicker quantity={6} />
    </div>
);

export default MenuItem;
