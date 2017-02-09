import React, { Component } from 'react';
import QuantityPicker from './QuantityPicker';

const MenuItem = ({ name, price, coins, imageUrl, onAddClick, quantity = 0 }) => (
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
      <QuantityPicker
        onAddClick={onAddClick}
        quantity={quantity}
        />
    </div>
);

export default MenuItem;
