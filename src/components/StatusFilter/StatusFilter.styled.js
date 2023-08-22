import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';

import { baseTransition } from 'styles';

export const StatusFilterContainer = styled(ModalContent)`
  max-width: 300px;
`;

export const StatusFilterMainText = styled.p`
  color: ${props => props.theme.colors.titleColor};
  font-family: Poppins;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  width: 100%;
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 14px;
`;

export const StatusFilterBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
`;

export const StatusFilterLabel = styled.p`
  color: ${props => props.theme.colors.titleColor};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const StatusFilterShowAll = styled.button`
  cursor: pointer;
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  text-decoration-line: underline;
  color: ${props =>
    props.selected
      ? props.theme.colors.filterBtnColorSelected
      : props.theme.colors.filterBtnColor};
  transition: color ${baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.iconHover};
  }
`;

export const StatusFilterItem = styled.li`
  &:not(:last-of-type) {
    margin-bottom: 8px;
  }
`;
