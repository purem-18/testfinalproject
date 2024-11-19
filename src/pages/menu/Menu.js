import React from 'react';
import { menuData } from '../../assets/data/menuData';
import './menu.css';



const MenuItem = ({ item }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.name} className="menu-item-image" />
    <div className="menu-item-content">
      <div className="menu-item-header">
        <h3 className="menu-item-name">{item.name}</h3>
        <span className="menu-item-price">{item.price}</span>
      </div>
      <p className="menu-item-description">{item.description}</p>
      <p className="menu-item-cooking">{item.cooking}</p>
    </div>
  </div>
);

const MenuSection = ({ title, items }) => (
  <section className="menu-section">
    <h2 className="menu-section-title">{title}</h2>
    <div className="menu-grid">
      {items.map(item => <MenuItem key={item.id} item={item} />)}
    </div>
  </section>
);

const Menu = () => {
  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Mediterranean Delights</h1>
      <MenuSection title="Starters" items={menuData.starters} />
      <MenuSection title="Main Courses" items={menuData.mainCourses} />
      <MenuSection title="Salads & Sides" items={menuData.salads} />
      <MenuSection title="Desserts" items={menuData.desserts} />
      <section className="menu-section">
        <h2 className="menu-section-title">Beverages</h2>
        <MenuSection title="Hot Drinks" items={menuData.beverages.hot} />
        <MenuSection title="Cold Drinks" items={menuData.beverages.cold} />
      </section>
    </div>
  );
};

export default Menu;