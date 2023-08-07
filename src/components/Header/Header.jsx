import React, { useEffect, useState } from 'react';
import ThemeSelector from './ThemeSelector';
import Profile from './Profile';
import Menu from './Menu';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledHeader, DivBtnStyle, StyledNav } from './Header.styled';

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
