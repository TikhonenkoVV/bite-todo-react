import PropTypes from 'prop-types';

import {
  FilterButton,
  FilterIcon,
  FilterText,
} from './StatusFilterButton.styled';

const StatusFilterButton = ({
  selected,
  color,
  theme,
  children,
  ...otherProps
}) => {
  return (
    <FilterButton
      theme={theme}
      selected={selected}
      type="button"
      {...otherProps}
    >
      <FilterIcon
        text={children}
        selected={selected}
        color={color}
        theme={theme}
      ></FilterIcon>
      <FilterText>{children}</FilterText>
    </FilterButton>
  );
};

StatusFilterButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  theme: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default StatusFilterButton;
