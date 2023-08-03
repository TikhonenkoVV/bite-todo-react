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
  padding: 18px 32px;
  height: 60px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivBtnStyle = styled.div`
  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
    cursor: pointer;
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
    const handleKeyPress = event => {
      if (event.key === 'Escape' && menuActive) {
        setMenuActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [menuActive]);

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
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 16H28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 8H28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 24H28"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
