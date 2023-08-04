import React, { useEffect, useState } from 'react';
import ThemeSelector from './ThemeSelector';
import Profile from './Profile';
import styled from '@emotion/styled';
import Menu from './Menu';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';

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

  @media screen and (min-width: 768px) {
    height: 68px;
  }
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
      if (event.key === 'Escape' && menuActive && window.innerWidth <= 768) {
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
        <Svg w={32} h={32} use={`${sprite}#icon-burger`} />
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
