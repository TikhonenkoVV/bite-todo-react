import styled from '@emotion/styled';
import { devices } from 'styles';

export const StyledDiv = styled.div`
  position: relative;
  padding: 24px;
  color: ${props => props.theme.colors.formTitleColor};
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.formBorderColor};
  background: ${props => props.theme.colors.formBackgroundColor};
  font-family: Poppins;

  width: 100%;

  @media ${devices.mobile} {
    width: 335px;
  }

  @media screen and ${devices.tablet} {
    max-width: 400px;
  }
`;

export const StyledP = styled.p`
  font-size: 18px;
  letter-spacing: -0.02em;
`;

export const StyledInput = styled.input`
  outline: none;
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  margin: 24px 0 14px 0;

  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.formAddButtonBackground};
  background: ${props => props.theme.colors.formInputBackground};
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: ${props => props.theme.colors.formTitleColor};
  letter-spacing: -0.02em;

  &:focus {
    opacity: 1;
    border: 1px solid ${props => props.theme.colors.formAddButtonBackground};
  }
`;

export const StyledTextArea = styled.textarea`
  outline: none;
  width: 100%;
  height: 120px;
  padding: 14px 18px;

  resize: none;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.formAddButtonBackground};
  background: ${props => props.theme.colors.formInputBackground};
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: ${props => props.theme.colors.formTitleColor};
  letter-spacing: -0.02em;

  &:focus {
    opacity: 1;
    border: 1px solid ${props => props.theme.colors.formAddButtonBackground};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 49px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.theme.colors.formAddButtonBackground};
  color: ${props => props.theme.colors.formAddButtonColor};
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.02em;
  margin-top: 24px;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.formAddButtonHover};
  }
`;

export const DivIconClose = styled.div`
  position: absolute;
  color: ${props => props.theme.colors.formTitleColor};
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
