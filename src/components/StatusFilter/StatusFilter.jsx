import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { selectStatusFilter } from 'store/filter/selectors';
import { statusFilters } from 'store/filter/constants';
import { setStatusFilter } from 'store/filter/filterSlice';
import StatusFilterButton from 'components/StatusFilterButton';

import {
  StatusFilterContainer,
  StatusFilterMainText,
  StatusFilterLabel,
  StatusFilterBox,
  StatusFilterShowAll,
  StatusFilterItem,
} from './StatusFilter.styled';
import { ButtonIcon } from 'components/miniComponents/ButtonIcon/ButtonIcon';

const options = [
  {
    text: 'Without priority',
    color: 'rgba(255, 255, 255, 0.3)',
  },
  {
    text: 'Low',
    color: 'rgba(143, 161, 208, 1)',
  },
  {
    text: 'Medium',
    color: 'rgba(224, 156, 181, 1)',
  },
  {
    text: 'High',
    color: 'rgba(190, 219, 176, 1)',
  },
];

const StatusFilter = ({ onClose }) => {
  const dispatch = useDispatch();

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  const onChangeFilterClick = text => {
    switch (text) {
      case 'Without priority':
        return handleFilterChange(statusFilters.none);
      case 'Show all':
        return handleFilterChange(statusFilters.all);
      case 'Low':
        return handleFilterChange(statusFilters.low);
      case 'Medium':
        return handleFilterChange(statusFilters.medium);
      case 'High':
        return handleFilterChange(statusFilters.high);
      default:
        return;
    }
  };

  const filter = useSelector(selectStatusFilter);

  return (
    <StatusFilterContainer>
      <ButtonIcon
        action={onClose}
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
        }}
      />
      <StatusFilterMainText>Filter</StatusFilterMainText>
      <StatusFilterBox>
        <StatusFilterLabel>Label color</StatusFilterLabel>

        <StatusFilterShowAll
          type="button"
          selected={!filter.priority}
          onClick={() => onChangeFilterClick('Show all')}
        >
          Show all
        </StatusFilterShowAll>
      </StatusFilterBox>
      <ul>
        {options.map(({ text, color }, index) => (
          <StatusFilterItem key={index}>
            <StatusFilterButton
              selected={filter.statusText === text}
              onClick={() => onChangeFilterClick(text)}
              color={color}
            >
              {text}
            </StatusFilterButton>
          </StatusFilterItem>
        ))}
      </ul>
    </StatusFilterContainer>
  );
};

StatusFilter.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default StatusFilter;
