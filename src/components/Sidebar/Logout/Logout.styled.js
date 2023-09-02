import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const ButtonStyled = styled.button`
  display: flex;
  margin: 24px 0 14px 14px;
  column-gap: 14px;
  align-items: center;

  cursor: pointer;

  @media screen and (${devices.tablet}) {
    margin-left: 24px;
    margin-bottom: 24px;
  }
`;

export const Container = styled.div`
  fill: ${props => props.theme.colors.btnLogOut};
  transition: color ${baseTransition};

  &:hover,
  &:focus {
    fill: ${props => props.theme.colors.btnLogOutHover};
  }
`;

export const PStyled = styled.p`
  font-family: Poppins;
  @media screen and (${devices.desktop}) {
    font-size: 16px;
  }
`;
