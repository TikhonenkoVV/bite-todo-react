import styled from '@emotion/styled';
import { devices } from 'styles';

export const ContainerSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100vh;
  display: ${props => (props.menuActive ? 'block' : 'none')};
  background-color: #121212;
  z-index: 3;
  padding-top: 14px;
  color: #ffffff;

  @media screen and ${devices.tablet} {
    width: 260px;
    padding: 24px 0;
  }
  @media screen and ${devices.desktop} {
    grid-row: 1 / 3;
  }
`;

export const WrapperBottom = styled.div`
  margin-bottom: 24px;
  position: absolute;
  bottom: 0;
  @media screen and ${devices.desktop} {
    position: static;
  }
`;
