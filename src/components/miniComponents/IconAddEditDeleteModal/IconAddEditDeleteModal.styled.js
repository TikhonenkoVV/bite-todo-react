import styled from '@emotion/styled';
import { baseTransition } from 'styles';

export const StyledDiv = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background-color: ${props => props.theme.colors.card};
  border-radius: 20%;
  fill: ${props => props.theme.colors.plusButtonColor};
`;
