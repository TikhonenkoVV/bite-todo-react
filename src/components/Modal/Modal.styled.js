import styled from '@emotion/styled';
import { devices } from 'styles';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6;
  box-sizing: border-box;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(100vw - 48px);
  background: ${props => props.theme.colors.formBackgroundColor};
  transform: translate(-50%, -50%);
  border: 1px solid rgba(190, 219, 176, 0.5);
  border-radius: 8px;
  padding: 24px;
  @media screen and (${devices.mobile}) {
    width: 335px;
  }
  @media screen and (${devices.tablet}) {
    width: 350px;
  }
`;
