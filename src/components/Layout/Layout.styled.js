import styled from '@emotion/styled';
import { devices } from 'styles';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 60px auto;

  @media screen and (${devices.tablet}) {
    grid-template-rows: 68px auto;
  }
  @media screen and (${devices.desktop}) {
    grid-template-columns: 260px auto;
  }
`;

export const WrapperMain = styled.main`
  overflow-x: auto;
  width: 100%;
  height: 100%;
  @media screen and (${devices.desktop}) {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const Backdrop = styled.div`
  @media screen and (${devices.notdesktop}) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 3;
    overflow: hidden;
  }
`;
