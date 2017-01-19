import React, { Component } from 'react';
import MenuCategoryItem from './MenuCategoryItem';

// TODO: Provide via Redux store, via network request
const fakeCategories = [
  { name: "Popular" },
  { name: "Tacos" },
  { name: "Burritos" },
  { name: "Drinks" },
]

class MenuCategoryList extends Component {
  render() {
    return(
      <div className="menu-category-list">
        {fakeCategories.map((category, index) => (
          <MenuCategoryItem
            key={index}
            name={category.name}
          />
        ))}
      </div>
    )
  }
};

export default MenuCategoryList;
