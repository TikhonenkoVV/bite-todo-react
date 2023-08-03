import React from 'react';
import { RadioButton, RadioIcon } from './NewBoard.styled';


const IconRadioButton = ({ name, value }) => {
  return (
    <RadioIcon>
      <RadioButton type="radio" name={name} value={value}/>
      <span >{value}</span>
    </RadioIcon>
  );
};

export default IconRadioButton;
