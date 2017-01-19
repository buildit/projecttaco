import React, { Component } from 'react';
import PlaceholderImage from './PlaceholderImage';

const MenuCategoryItem = ({ name }) => (
    <div className="menu-category-item">
      <PlaceholderImage width={120} height={120} />
      <h2 className="category-name">{name}</h2>
    </div>
);

export default MenuCategoryItem;
