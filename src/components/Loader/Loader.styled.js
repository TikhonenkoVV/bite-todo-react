import styled from '@emotion/styled';

export const LoaderBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000000d0;
  z-index: 5;
`;

export const Spiner = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  fill: ${props => props.fill};
`;
