import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const ColumnContainer = styled.div`
  max-width: 335px;
`;

export const ColumnTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding: 18px 20px 17px 20px;
  height: 56px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
`;

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${props => props.theme.colors.titleColor};
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 40px;
  height: 16px;
`;

export const TitleIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${props => props.theme.colors.iconFill};
  transition: fill ${baseTransition};
  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.iconHover};
  }
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
