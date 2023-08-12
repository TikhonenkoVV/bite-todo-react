import React, { useEffect, useState } from 'react';
import {
  DivStyled,
  BtnSelectStyled,
  DivListStyled,
  UlListStyled,
  LiStyled,
} from './ThemeSelector.styled';

const ThemeSelector = () => {
  const [theme, setTheme] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = event => {
    event.stopPropagation();
    setTheme(event.target.innerText);
    setIsOpen(false);
  };

  const handleClick = event => {
    event.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const closeMenuOnClickOutside = event => {
      setIsOpen(false);
    };

    window.addEventListener('click', closeMenuOnClickOutside);

    return () => {
      window.removeEventListener('click', closeMenuOnClickOutside);
    };
  }, []);

  return (
    <DivStyled>
      <BtnSelectStyled onClick={handleClick}>
        {theme === '' ? 'Theme' : theme}
      </BtnSelectStyled>
      <DivListStyled isOpen={isOpen} onClick={e => e.stopPropagation()}>
        <UlListStyled>
          <LiStyled onClick={handleThemeChange}>Light</LiStyled>
          <LiStyled onClick={handleThemeChange}>Dark</LiStyled>
          <LiStyled onClick={handleThemeChange}>Violet</LiStyled>
        </UlListStyled>
      </DivListStyled>
    </DivStyled>
  );
};

export default ThemeSelector;
