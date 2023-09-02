import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { devices } from 'styles';

export const StyledDiv = styled(ModalContent)`
  @media screen and (${devices.tablet}) {
    width: 400px;
  }
`;

export const StyledP = styled.p`
  font-size: 18px;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.formTitleColor};
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
  }
`;

export const StyledTextArea = styled.textarea`
  outline: none;
  width: 100%;
  height: 120px;
  padding: 14px 18px;
  margin-bottom: 24px;

  resize: none;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.formAddButtonBackground};
  background: ${props => props.theme.colors.formInputBackground};
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: ${props => props.theme.colors.formTitleColor};
  letter-spacing: -0.02em;

  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.formTitleColor};
    border-radius: 5px;
  }

  &:focus {
    opacity: 1;
    border: 1px solid ${props => props.theme.colors.formAddButtonBackground};
  }
`;
