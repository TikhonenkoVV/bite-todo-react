import styled from '@emotion/styled';
import { Field } from 'formik';

import { devices, baseTransition } from 'styles';

export const FormBox = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 335px;
  color: ${props => props.theme.colors.textColorForm};
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: ${props => props.theme.colors.background};
  padding: 24px;
  @media screen and (${devices.tablet}) {
    max-width: 350px;
  }
`;

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

export const Title = styled.h2`
  color: ${props => props.theme.colors.textColorForm};
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
    border-color: ${props => props.theme.colors.formInputBorderColor};
  }
`;

export const RadioIcon = styled.label`
  color: ${props => props.theme.colors.textColorForm};
  opacity: ${props => (props.checked ? '100%' : '50%')};
  transition: ${baseTransition};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.formInputBorderColor};
    opacity: 100%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  color: ${props => props.theme.colors.textColorForm};
`;

export const SvgBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 25%;
  padding: 7px;
  background: ${props => props.theme.colors.buttonIconBackground};
  color: ${props => props.theme.colors.buttonIconFill};
`;

export const ButtonText = styled.p`
  color: ${props => props.theme.colors.addButtonColor};
`;

export const Error = styled.p`
  color: #ed4337;
  font-family: Poppins;
  font-size: 12px;
  margin-top: 8px;
`;

export const ModalBoardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 49px;
  padding: 10px 0px 11px 0px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  border-radius: 8px;
  color: ${props => props.theme.colors.addButtonColor};
  background: ${props => props.theme.colors.addButtonBackground};
  transition: ${baseTransition};
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.addButtonHoverBackground};
  }
`;
