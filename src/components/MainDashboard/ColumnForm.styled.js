import styled from '@emotion/styled';
import { Field } from 'formik';
import { baseTransition, devices } from 'styles';

export const FormTitle = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  color: ${props => props.theme.colors.formTitleColor};
`;

export const FormContainer = styled.div`
  position: relative;
  max-width: 335px;
  padding: 24px;
  border-radius: 8px;
  background: ${props => props.theme.colors.formBackgroundColor};
  border: 1px solid ${props => props.theme.colors.formBorderColor};
  @media screen and (${devices.tablet}) {
    min-width: 350px;
  }
`;

export const FormInput = styled(Field)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
  font-size: 14px;
  font-weight: 400;
  color: ${props => props.theme.colors.formInputColor};
  line-height: normal;
  letter-spacing: -0.28px;
  background-color: ${props => props.theme.colors.formInputBackground};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.formInputBorderColor};
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: none;
  }

  transition: background ${baseTransition};
`;

export const AddButton = styled.button`
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
  color: ${props => props.theme.colors.formAddButtonColor};
  border-radius: 8px;
  background-color: ${props => props.theme.colors.formAddButtonBackground};
  transition: background ${baseTransition};
  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.formAddButtonHover};
  }
`;

export const FormIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.colors.formIconContainerBackground};
  border-radius: 6px;
`;

export const FormIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${props => props.theme.colors.formIconAddButtonFill};
`;

export const ValidationError = styled.p`
  margin-top: 6px;
  color: #ed4337;
  font-size: 12px;
`;

export const TitleContainer = styled.div`
  margin-bottom: 24px;
`;
