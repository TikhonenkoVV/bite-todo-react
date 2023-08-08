import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;

  @media screen and (min-width: 1440px) {
    position: static;
    grid-template-columns: 260px auto;
    grid-template-rows: 64px auto;
  }
`;

export const WrapperMain = styled.main`
  overflow-x: auto;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1440px) {
    grid-column: 2;
    grid-row: 2;
  }
`;

export const Backdrop = styled.div`
  @media screen and (max-width: 1439px) {
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
