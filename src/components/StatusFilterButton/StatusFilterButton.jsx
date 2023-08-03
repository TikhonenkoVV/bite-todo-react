import {
  FilterButton,
  FilterIcon,
  FilterText,
} from './StatusFilterButton.styled';

const StatusFilterButton = ({ selected, color, children, ...otherProps }) => {
  return (
    <FilterButton selected={selected} type="button" {...otherProps}>
      <FilterIcon color={color}></FilterIcon>
      <FilterText>{children}</FilterText>
    </FilterButton>
  );
};

export default StatusFilterButton;
