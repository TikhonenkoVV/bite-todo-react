import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.card};
  border-radius: 20%;
  fill: ${props => props.theme.colors.plusButtonColor};
`;
