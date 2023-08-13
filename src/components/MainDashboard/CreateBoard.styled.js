import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const CreateBoardContainer = styled.div`
  margin: auto;
  text-align: center;
  color: ${props => props.theme.colors.createBoardContainerColor};
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.28px;

  @media (min-width: 768px) {
    max-width: 486px;
  }
`;

export const CreateBoardButton = styled.button`
  color: ${props => props.theme.colors.formAddButtonBackground};
  font-family: Poppins;
  transition: color ${baseTransition};
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.formAddButtonHover};
  }
`;
