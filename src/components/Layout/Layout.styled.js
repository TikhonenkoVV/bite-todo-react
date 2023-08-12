import styled from '@emotion/styled';
import { theme } from 'styles';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;

  @media screen and ${theme.devices.desktop} {
    grid-template-columns: 260px auto;
    grid-template-rows: 64px auto;
  }
`;

export const WrapperMain = styled.main`
  overflow-x: auto;
  width: 100%;
  height: 100%;
  @media screen and ${theme.devices.desktop} {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const Backdrop = styled.div`
  @media screen and ${theme.devices.notdesktopdesktop} {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 2;
    overflow: hidden;
  }
`;
