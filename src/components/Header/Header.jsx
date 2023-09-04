import React, { useEffect, useState } from 'react';
import ThemeSelector from './ThemeSelector';
import Profile from './Profile';
import { StyledHeader, DivBtnStyle, StyledNav } from './Header.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

const Header = ({ menuActive, setMenuActive, toggleMenu }) => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape' && window.innerWidth <= 1439) {
        setMenuActive(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuActive, setMenuActive]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setMenuActive(true);
      } else {
        setMenuActive(false);
      }
      setWindowWidth(window.innerWidth);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setMenuActive]);

  return (
    <StyledHeader>
      <DivBtnStyle onClick={toggleMenu}>
        <Svg
          w={windowWidth < 767 ? 24 : 32}
          h={windowWidth < 767 ? 24 : 32}
          icon="burger"
        />
      </DivBtnStyle>
      <StyledNav>
        <ThemeSelector />
        <Profile />
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
