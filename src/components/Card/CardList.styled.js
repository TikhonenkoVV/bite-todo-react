import styled from '@emotion/styled';

export const CardListContainer = styled.div`
  max-height: calc(100vh - 312px);
  height: 100%;
  min-width: 350px;
  margin-bottom: 14px;

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
  max-width: 335px;
  min-height: 100%;
`;

export const TrackVertical = styled.div`
  background-color: ${props =>
    props.theme.colors.columnTrackVerticalBackground};
  right: 0;
  bottom: 0;
  top: 2px;
  border-radius: 12px;
  width: 8px !important;
`;

export const ThumbVertical = styled.div`
  border-radius: 12px;
  background-color: ${props =>
    props.theme.colors.columnThumbVerticalBackground};
`;
