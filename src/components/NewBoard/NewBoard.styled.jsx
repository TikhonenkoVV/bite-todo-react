import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormBox = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 335px;
  color: #fff;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: ${props => (props.scheme === 'dark' ? '#232323' : '#FDFDFD')};
  padding: 24px;
  @media screen and (min-width: 768px) {
    max-width: 350px;
  }
`;

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${props => (props.scheme === 'violet' ? '#5255BC' : '#bedbb0')};
  opacity: ${props => (props.value  ? '1' : '0.4')};
  background: ${props => (props.scheme === 'dark' ? '#232323' : '#FDFDFD')};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  padding: 14px 18px;
  color: ${props => (props.scheme === 'dark' ? 'rgba(255, 255, 255, 1)' : 'rgba(22, 22, 22, 1)')};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  @media screen and (min-width: 768px) {
    max-width: 302px;
  }

  &:focus {
    outline: none;
    border: 1px solid
      ${props => (props.scheme === 'violet' ? '#5255BC' : '#bedbb0')};
    opacity: 1;
  }
`;

export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 14px;
  color: ${props => (props.scheme === 'dark' ? '#FFF' : '#161616')};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const Title = styled.h2`
  color: ${props => (props.scheme === 'dark' ? '#FFF' : '#161616')};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;

export const RadioIconBox = styled.div`
  display: flex;
  gap: 8px;
`;

export const RadioBackgroundBox = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  max-width: 260px;
  margin-bottom: 40px;
`;

export const RadioButton = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const RadioImg = styled.img`
  display: block;
  width: 28px;
  border-radius: 25%;
  box-sizing: border-box;
  border: ${props =>
    props.checked
      ? `2px solid ${props.scheme === 'violet' ? '#5255BC' : '#bedbb0'}`
      : '2px solid transparent'};
`;

export const RadioIcon = styled.label`
  color: ${props =>
    props.scheme === 'dark' ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)'};
  opacity: ${props => (props.checked ? '100%' : '50%')};
  fill: ${props =>
    props.scheme === 'dark' ? 'rgb(255, 255, 255)' : 'rgba(22, 22, 22)'};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${props => (props.scheme === 'violet' ? '#FFF' : '#161616')};
`;

export const SvgBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25%;
  padding: 7px;
  background: ${props =>
    props.scheme === 'violet' ? 'rgba(255, 255, 255, 1)' : '#161616'};
  color: ${props =>
    props.scheme === 'violet' ? '#161616' : 'rgba(255, 255, 255, 1)'};
`;

export const ButtonText = styled.p`
  color: ${props => (props.scheme === 'violet' ? '#FFF' : '#161616')};
`;

export const Error = styled.p`
  color: #ed4337;
  font-family: Poppins;
  font-size: 12px;
  margin-top: 8px;
`;