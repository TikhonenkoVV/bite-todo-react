import styled from '@emotion/styled';
import { devices } from 'styles';

export const ContainerSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100vh;
  display: ${props => (props.menuActive ? 'block' : 'none')};
  background-color: ${props => props.theme.colors.sideBar};
  z-index: 3;
  padding-top: 14px;
  color: ${props => props.theme.colors.sideBarMainText};

  @media screen and ${devices.tablet} {
    width: 260px;
    padding-top: 24px;
  }
  @media screen and ${devices.desktop} {
    padding: 24px 0;
    grid-row: 1 / 3;
  }
`;

export const WrapperBottom = styled.div`
  position: absolute;
  bottom: 0;
  @media screen and ${devices.desktop} {
    position: static;
  }
`;
