import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: 260px auto;
    grid-template-rows: 64px auto;
  }
`;

export const WrapperMain = styled.div`
  overflow-x: auto;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
    grid-column: 2;
    grid-row: 2;
  }
`;
