import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${props => props.styles.padding};
  gap: 8px;
  outline: none;
  border-radius: ${props => props.styles.borderRadius};
  background-color: ${props => props.styles.backgroundColor};
  color: ${props => props.styles.color};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;
