import PropTypes from 'prop-types';

import { FilterButton } from './StatusFilterButton.styled';

const StatusFilterButton = ({ selected, color, children, onClick }) => {
  return (
    <FilterButton
      selected={selected}
      type="button"
      onClick={onClick}
      color={color}
      text={children}
    >
      {children}
    </FilterButton>
  );
};

StatusFilterButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default StatusFilterButton;
