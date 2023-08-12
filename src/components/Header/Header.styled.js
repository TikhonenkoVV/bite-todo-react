import styled from '@emotion/styled';
import { devices } from 'styles';

export const StyledHeader = styled.header`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.header};
  color: ${props => props.theme.colors.cardMajorText};
  padding: 18px 32px;
  height: 60px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and ${devices.desktop} {
    justify-content: right;
    grid-column: 2;
    height: 68px;
  }
`;

export const DivBtnStyle = styled.div`
  display: block;
  width: 32px;
  height: 32px;
  cursor: pointer;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;
