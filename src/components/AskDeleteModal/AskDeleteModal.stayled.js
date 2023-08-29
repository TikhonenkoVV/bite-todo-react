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

export const WrapperButton = styled.div`
  margin-top: 24px;
  display: flex;
  column-gap: 24px;
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

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.formAddButtonHover};
  }
`;
