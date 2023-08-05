import PropTypes from 'prop-types';

import {
  FilterButton,
  FilterIcon,
  FilterText,
} from './StatusFilterButton.styled';

const StatusFilterButton = ({ selected, color, children, ...otherProps }) => {
  return (
    <FilterButton selected={selected} type="button" {...otherProps}>
      <FilterIcon selected={selected} color={color}></FilterIcon>
      <FilterText>{children}</FilterText>
    </FilterButton>
  );
};

StatusFilterButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};

export default StatusFilterButton;
