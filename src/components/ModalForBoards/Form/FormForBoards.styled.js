import styled from '@emotion/styled';
import { Field } from 'formik';

import { devices, baseTransition } from 'styles';

export const FormInput = styled(Field)`
  display: block;
  width: 100%;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.borderInputColor};
  opacity: ${props => (props.value ? '1' : '0.4')};
  background: ${props => props.theme.colors.background};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  padding: 14px 18px;
  color: ${props => props.theme.colors.textColorForm};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  @media screen and (${devices.tablet}) {
    max-width: 302px;
  }
  transition: ${baseTransition};
  &:focus,
  &:hover {
    outline: none;
    border: 1px solid ${props => props.theme.colors.borderInputColor};
    opacity: 1;
  }
`;

export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 14px;
  color: ${props => props.theme.colors.textColorForm};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const RadioIconBox = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  border: 2px solid transparent;
  border-color: ${props =>
    props.checked ? props.theme.colors.formInputBorderColor : 'transparent'};
  transition: ${baseTransition};
  &:hover,
  &:focus {
    scale: 120%;
    border-color: ${props => props.theme.colors.formInputBorderColor};
  }
`;

export const RadioIcon = styled.label`
  fill: ${props => props.theme.colors.textColorForm};
  opacity: ${props => (props.checked ? '100%' : '50%')};
  transition: ${baseTransition};
  &:hover,
  &:focus {
    scale: 130%;
    fill: ${props => props.theme.colors.formInputBorderColor};
    opacity: 100%;
  }
`;

export const Error = styled.p`
  color: #ed4337;
  font-family: Poppins;
  font-size: 12px;
  margin-top: 8px;
`;
