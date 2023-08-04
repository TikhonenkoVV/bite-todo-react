import React from 'react';
import styled from '@emotion/styled';
import { Sidebar } from 'components/Sidebar/Sidebar';

const DivBtnBurgerMenuSyled = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    width: 225px;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate(-100%);
    transition: transform 0.2s;

    &.active {
      transform: translate(0);
    }
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    width: 225px;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate(-100%);
    transition: transform 0.2s;

    &.active {
      transform: translate(0);
    }
  }
`;

const DivSideBarContentStyled = styled.div`
  padding-top: 14px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: black;
    transition: transform 0.4s;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: black;
    transition: transform 0.4s;
  }
`;

const Menu = ({ active, setActive }) => {
  return (
    <DivBtnBurgerMenuSyled
      className={active ? 'menu active' : 'menu'}
      onClick={() => setActive(false)}
    >
      <DivSideBarContentStyled onClick={e => e.stopPropagation()}>
        <Sidebar />
        {/* CONTENT SIDE BAR */}
      </DivSideBarContentStyled>
    </DivBtnBurgerMenuSyled>
  );
};

export default Menu;
