import React from 'react';
import Sidebar from 'components/Sidebar';
import { DivBtnBurgerMenuStyled, DivSideBarContentStyled } from './Menu.styled';

const Menu = ({ active, setActive }) => {
  return (
    <DivBtnBurgerMenuStyled
      className={active ? 'menu active' : 'menu'}
      onClick={() => setActive(false)}
    >
      <DivSideBarContentStyled onClick={e => e.stopPropagation()}>
        <Sidebar />
      </DivSideBarContentStyled>
    </DivBtnBurgerMenuStyled>
  );
};

export default Menu;
