import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const StyledButton = styled.button`
  width: 16px;
  height: 16px;
  cursor: pointer;
  fill: ${props => props.theme.colors.iconFill};
  transition: fill ${baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.iconHover};
  }
`;
