import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioIcon } from './NewBoard.styled';

const IconRadioButton = ({ name, value, checked }) => {
  return (
    <RadioIcon checked={checked}>
      <RadioButton type="radio" name={name} value={value} />
      <span>{value}</span>
    </RadioIcon>
  );
};

IconRadioButton.propTypes = {
  name: PropTypes.string.isRequired, 
  value: PropTypes.string.isRequired, 
  checked: PropTypes.bool.isRequired, 
};

export default IconRadioButton;
