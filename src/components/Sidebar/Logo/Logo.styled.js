import styled from '@emotion/styled';
import { Link } from 'react-router-dom/dist';

export const LinkStyled = styled(Link)`
  margin-left: 14px;
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const PStyled = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: -0.04em;
  color: #fff;

  cursor: pointer;
`;
