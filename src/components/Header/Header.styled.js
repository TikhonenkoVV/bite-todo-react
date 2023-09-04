import styled from '@emotion/styled';
import { devices } from 'styles';

export const StyledHeader = styled.header`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  background-color: ${props => props.theme.colors.header};
  color: ${props => props.theme.colors.cardMajorText};
  padding: 14px 20px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${devices.tablet}) {
    padding: 18px 32px;
    height: 68px;
  }

  @media screen and (${devices.desktop}) {
    justify-content: right;
    grid-column: 2;
  }
`;

export const DivBtnStyle = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  cursor: pointer;
  fill: currentColor;
  @media screen and (${devices.tablet}) {
    width: 32px;
    height: 32px;
  }
  @media screen and (${devices.desktop}) {
    display: none;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;
