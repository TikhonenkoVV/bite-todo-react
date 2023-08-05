import styled from '@emotion/styled';

export const CardListContainer = styled.div`
  max-height: calc(100vh - 312px);
  color: #fff;
  margin-bottom: 14px;
  overflow-y: scroll;

  @media (min-width: 768px) {
    max-height: calc(100vh - 324px);
  }

  @media (min-width: 1440px) {
    max-height: calc(100vh - 292px);
  }
`;

export const CardListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #fff;
`;

export const CardListItemStyled = styled.li`
  height: 154px;
  width: 100%;
  outline: 1px solid red;
`;
