import React, { useEffect, useState } from 'react';
import {
  DivStyled,
  BtnSelectStyled,
  DivListStyled,
  UlListStyled,
  LiStyled,
} from './ThemeSelector.styled';
import { useDispatch } from 'react-redux';
import { setTheme } from 'store/theme/operations';

const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const handleThemeChange = event => {
    event.stopPropagation();
    const themeName = event.target.innerText;
    setCurrentTheme(themeName);
    dispatch(setTheme(themeName));
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
        {currentTheme === '' ? 'Theme' : currentTheme}
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
