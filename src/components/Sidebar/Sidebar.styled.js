import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const ContainerSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: -225px;
  width: 225px;
  height: 100svh;
  background-color: ${props => props.theme.colors.sideBar};
  z-index: 5;
  padding-top: 14px;
  color: ${props => props.theme.colors.sideBarMainText};
  transition: transform ${baseTransition};

  ${props =>
    props.menuActive &&
    `
    transform: translateX(225px);
  `}

  @media screen and (${devices.tablet}) {
    left: -260px;
    width: 260px;
    padding-top: 24px;

    ${props =>
      props.menuActive &&
      `
    transform: translateX(260px);
  `}
  }

  @media screen and (${devices.desktop}) {
    padding-top: 24px;
    grid-row: 1 / 3;
    height: 100vh;
  }
`;

export const WrapperBottom = styled.div`
  position: absolute;
  bottom: 0;
`;
