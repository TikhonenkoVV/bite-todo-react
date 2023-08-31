import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FromStyled = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 14px 18px;
  color: ${props => props.theme.colors.textColorForm};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.borderInputColor};
  opacity: 0.4;
  background-color: transparent;
  margin-top: 14px;

  &:first-of-type {
    margin-top: 0;
  }

  &::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }

  &:focus {
    border: 1px solid ${props => props.theme.colors.borderInputColor};
    opacity: 1;
    outline: none;
  }
`;

export const ErrorStyled = styled.p`
  color: ${props => props.theme.colors.errorColor};
  font-family: Poppins;
  font-size: 12px;
  margin-top: 8px;
`;

export const WrapperInput = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 24px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 49px;
  margin-top: 14px;
`;

export const BtnShowPassword = styled.button`
  position: absolute;
  right: 18px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  fill: ${props => props.theme.colors.eyeShowPassColor};
`;
