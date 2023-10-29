import styled from '@emotion/styled';
import { devices } from 'styles';

export const CardListContainer = styled.div`
  max-height: calc(100svh - 336px);
  height: 100%;
  min-width: 350px;
  margin-bottom: 14px;

  @media screen and (${devices.tablet}) {
    max-height: calc(100svh - 356px);
  }

  @media screen and (${devices.desktop}) {
    max-height: calc(100vh - 293px);
  }
`;

export const CardListStyled = styled.div`
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
