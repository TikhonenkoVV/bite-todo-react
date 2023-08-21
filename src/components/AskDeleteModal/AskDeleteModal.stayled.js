import styled from '@emotion/styled';
import { devices } from 'styles';

export const DivStyled = styled.div`
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

  @media screen and (${devices.tablet}) {
    width: 400px;
  }
`;

export const StyledP = styled.p`
  font-size: 18px;
  letter-spacing: -0.02em;
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
