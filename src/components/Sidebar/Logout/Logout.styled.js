import styled from '@emotion/styled';
import { devices } from 'styles';

export const ButtonStyled = styled.button`
  display: flex;

  margin-top: 24px;
  margin-left: 14px;
  column-gap: 14px;
  align-items: center;

  cursor: pointer;

  @media screen and ${devices.tablet} {
    margin-left: 24px;
  }
`;

export const Container = styled.div`
  color: #bedbb0;
  &:hover,
  &:focus {
    color: #9dc888;
  }
`;

export const PStyled = styled.p`
  font-family: Poppins;
  @media screen and ${devices.desktop} {
    font-size: 16px;
  }
`;
