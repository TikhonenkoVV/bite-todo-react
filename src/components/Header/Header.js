import React, { useEffect, useState } from 'react';
import ThemeSelector from './ThemeSelector';
import Profile from './Profile';
import styled from '@emotion/styled';
import Menu from './Menu';

const StyledHeader = styled.header`
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

const DivBtnStyle = styled.div`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 20px;
      height: 2px;
      background-color: black;
    }

    span {
      position: absolute;
      top: 10px;
      width: 20px;
      height: 2px;
      background-color: black;
    }

    &::after {
      content: '';
      position: absolute;
      top: 20px;
      width: 20px;
      height: 2px;
      background-color: black;
    }
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <StyledHeader>
      <DivBtnStyle onClick={() => setMenuActive(!menuActive)}>
        <span></span>
      </DivBtnStyle>
      <Menu active={menuActive} setActive={setMenuActive} />

      <StyledNav>
        <ThemeSelector />
        <Profile />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
