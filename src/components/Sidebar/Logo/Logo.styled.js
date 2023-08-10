import styled from '@emotion/styled';
import { Link } from 'react-router-dom/dist';

export const LinkStyled = styled(Link)`
  margin-left: 14px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: 24px;
  }
`;

export const PStyled = styled.p`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.04em;
  cursor: pointer;
`;
