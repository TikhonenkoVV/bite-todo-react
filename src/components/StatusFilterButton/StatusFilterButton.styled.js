import styled from '@emotion/styled';

import { baseTransition } from 'styles';

export const FilterButton = styled.button`
  position: relative;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  padding-left: 22px;
  color: ${props =>
    props.selected
      ? props.theme.colors.filterBtnColorSelected
      : props.theme.colors.filterBtnColor};
  transition: color ${baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.iconHover};
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props =>
      props.text === 'Without priority'
        ? props.theme.colors.filterWithoutPriorityColor
        : props.color};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: ${props => props.theme.colors.filterDecorativeElement};
    opacity: ${props => (props.selected ? '1' : ' 0')};
  }
`;
