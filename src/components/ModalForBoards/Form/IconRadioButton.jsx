import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioIcon } from './FormForBoards.styled';
import { Svg } from '../../SvgIcon/SvgIcon';

const IconRadioButton = ({ name, value, checked }) => {
  return (
    <RadioIcon checked={checked}>
      <RadioButton type="radio" name={name} value={value} />
      <Svg w={18} h={18} icon={value} />
    </RadioIcon>
  );
};

IconRadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default IconRadioButton;
