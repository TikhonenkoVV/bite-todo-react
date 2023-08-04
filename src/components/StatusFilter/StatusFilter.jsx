import StatusFilterButton from 'components/StatusFilterButton';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { selectStatusFilter } from 'store/filter/selectors';
import { statusFilters } from 'store/filter/constants';
import { setStatusFilter } from 'store/filter/filterSlice';
import sprite from '../../img/icons/sprite.svg';

import {
  StatusFilterContainer,
  StatusFilterMainText,
  StatusFilterLabel,
  StatusFilterBox,
  StatusFilterShowAll,
  CloseButton,
} from './StatusFilter.styled';

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

  const path = '#icon-x-close';
  const filter = useSelector(selectStatusFilter);

  return (
    <StatusFilterContainer>
      <CloseButton onClick={() => onClose()}>
        <use href={`${sprite}${path}`}></use>
      </CloseButton>
      <StatusFilterMainText>Filter</StatusFilterMainText>
      <StatusFilterBox>
        <StatusFilterLabel>Label color</StatusFilterLabel>

        <StatusFilterShowAll
          selected={filter === 'Show all'}
          onClick={() => onChangeFilterClick('Show all')}
        >
          Show all
        </StatusFilterShowAll>
      </StatusFilterBox>

      {options.map(({ text, color }, index) => (
        <StatusFilterButton
          selected={filter === text}
          onClick={() => onChangeFilterClick(text)}
          key={index}
          color={color}
        >
          {text}
        </StatusFilterButton>
      ))}
    </StatusFilterContainer>
  );
};

StatusFilter.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default StatusFilter;
