import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const MainDashboardSection = styled.section`
  position: relative;
  background-color: ${props => props.theme.colors.background};
  background-image: ${props =>
    props.background !== 'default'
      ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/${props.background}.jpg")`
      : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (${devices.retina}),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${props =>
      props.background !== 'default'
        ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/${props.background}%402x.jpg")`
        : 'none'};
  }

  @media screen and (${devices.tablet}) {
    background-image: ${props =>
      props.background !== 'default'
        ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/${props.background}.jpg")`
        : 'none'};
    @media screen and (${devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.background !== 'default'
          ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/${props.background}%402x.jpg")`
          : 'none'};
    }
  }

  @media screen and (${devices.desktop}) {
    background-image: ${props =>
      props.background !== 'default'
        ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Desktop/${props.background}.jpg")`
        : 'none'};
    @media screen and (${devices.retina}),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.background !== 'default'
          ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Desktop/${props.background}.jpg")`
          : 'none'};
    }
  }
`;

export const MainDashboardContainer = styled.div`
  min-height: calc(100svh - 60px);
  height: 100%;
  padding: 74px 0 24px 0;
  overflow-x: auto;
  display: flex;

  @media screen and (${devices.tablet}) {
    min-height: calc(100svh - 68px);
    gap: 34px;
    padding: 80px 0 32px 0;
  }

  @media screen and (${devices.desktop}) {
    min-height: calc(100vh - 68px);
    padding: 48px 0 8px 0;
  }
`;

export const MainDashboardSectionTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
export const ContentWrapper = styled.div`
  width: max-content;
  height: 100%;
  margin-right: 20px;

  display: flex;
  margin-left: 20px;

  @media screen and (${devices.tablet}) {
    margin-left: 32px;
  }

  @media screen and (${devices.desktop}) {
    margin-left: 24px;
  }
`;

export const MainDashboardAddColumnButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 335px;
  height: 56px;
  padding: 14px 78px;
  margin-right: 20px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  border-radius: 8px;
  color: ${props => props.theme.colors.addColumnButtonColor};
  background-color: ${props => props.theme.colors.addColumnButtonBackground};
  transition: background ${baseTransition};
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.addColumnButtonHoverBackground};

    @media screen and (${devices.tablet}) {
      margin-right: 32px;
    }

    @media screen and (${devices.desktop}) {
      margin-right: 24px;
    }
  }
`;

export const MainDashboardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background-color: ${props => props.theme.colors.iconContainerBackground};
  border-radius: 6px;
`;

export const MainDashboardIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${props => props.theme.colors.addColumnIconFill};
`;

export const ContentHolder = styled.div`
  width: 100%;
`;

export const TrackHorizontal = styled.div`
  min-height: 12px;
  border-radius: 12px;
  bottom: 0;
  left: 20px;
  right: 20px;
  @media screen and (${devices.tablet}) {
    left: 32px;
    right: 32px;
  }

  @media screen and (${devices.desktop}) {
    left: 24px;
    right: 24px;
  }
  background-color: ${props =>
    props.theme.colors.mainTrackHorizontalBackground};
`;

export const ThumbHorizontal = styled.div`
  height: 12px;
  border-radius: 12px;
  background-color: ${props =>
    props.theme.colors.mainThumbHorizontalBackground};
`;
