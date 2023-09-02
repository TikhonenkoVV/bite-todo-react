import styled from '@emotion/styled';
import { baseTransition } from '../../../styles/theme';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 49px;
  padding: 10px 0px 11px 0px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  border-radius: 8px;
  color: ${props => props.theme.colors.addButtonColor};
  background: ${props => props.theme.colors.addButtonBackground};
  transition: background ${baseTransition};
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.addButtonHoverBackground};
  }
`;
