import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton, RadioIcon } from './NewBoard.styled';
import icons from '../../img/icons/sprite.svg';
import { Svg } from '../SvgIcon/SvgIcon';

const IconRadioButton = ({ name, value, checked, theme }) => {
  return (
    <RadioIcon checked={checked} theme={theme}>
      <RadioButton type="radio" name={name} value={value} />
      <Svg w={18} h={18} use={`${icons}#${value}`} />
    </RadioIcon>
  );
};

IconRadioButton.propTypes = {
  name: PropTypes.string.isRequired,
  theme: PropTypes.string,
  value: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default IconRadioButton;
