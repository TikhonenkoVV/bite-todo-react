import styled from '@emotion/styled';
import { Scrollbars } from 'react-custom-scrollbars-2';

export const CardListContainer = styled(Scrollbars)`
  max-height: calc(100vh - 327px);
  color: #fff;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    max-height: calc(100vh - 339px);
  }

  @media (min-width: 1440px) {
    max-height: calc(100vh - 307px);
  }
`;

export const CardListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
  margin-bottom: 14px;
`;
