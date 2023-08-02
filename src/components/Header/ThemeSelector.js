import styled from '@emotion/styled';
import React, { useState, useRef } from 'react';

const DivStyled = styled.div`
  width: 68px;
  height: 21px;
  position: relative;
  background-color: #161616;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;

  select {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    left: 0;
    z-index: 1;
    cursor: pointer;
    background-color: #161616;
    color: rgba(255, 255, 255, 0.8);
  }

  select option {
    font-family: Popins;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    background: none;

    &:hover {
      color: #bedbb0;
      background: none;
    }
  }

  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: 29%;
    transform: translateY(-50%);
    border: solid rgba(255, 255, 255, 0.8);
    border-width: 0 2px 2px 0;
    padding: 3px;

    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

const ThemeSelector = () => {
  const [theme, setTheme] = useState('');
  const selectRef = useRef();

  const handleThemeChange = event => {
    setTheme(event.target.value);
  };

  const handleClick = () => {
    selectRef.current.click();
  };

  return (
    <DivStyled onClick={handleClick}>
      <label>{theme === '' ? 'Theme' : theme}</label>
      <select ref={selectRef} value={theme} onChange={handleThemeChange}>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Violet">Violet</option>
      </select>
    </DivStyled>
  );
};

export default ThemeSelector;
