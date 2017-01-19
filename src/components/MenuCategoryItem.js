import React, { Component } from 'react';

const MenuCategoryItem = ({ name }) => (
    <div className="menu-category-item">
      <div className="placeholder">image</div>
      <h2>{name}</h2>
    </div>
);

export default MenuCategoryItem;
