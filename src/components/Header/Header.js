import React, { useState } from 'react';
import ThemeSelector from './ThemeSelector';
import Profile from './Profile';
import styled from '@emotion/styled';
import Menu from './Menu';
import './Burger.css';

const StyledHeader = styled.header`
  font-family: Popins;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  background-color: #161616;
  color: #ffffff;
  padding: 18px 20px;
  height: 60px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <StyledHeader>
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span></span>
      </div>
      <Menu active={menuActive} setActive={setMenuActive} />

      <StyledNav>
        <ThemeSelector />
        <Profile />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
