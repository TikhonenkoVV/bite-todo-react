import React from 'react';
import './Menu.css';

const Menu = ({ active, setActive }) => {
  return (
    <div
      className={active ? 'menu active' : 'menu'}
      onClick={() => setActive(false)}
    >
      <div className="menu__content" onClick={e => e.stopPropagation()}>
        {/* CONTENT SIDE BAR */}
      </div>
    </div>
  );
};

export default Menu;
