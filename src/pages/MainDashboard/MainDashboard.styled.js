import styled from '@emotion/styled';

export const MainDashboardSection = styled.section`
  position: relative;
  background-color: ${props => {
    switch (props.theme) {
      case 'dark':
        return '#1f1f1f';
      case 'violet':
        return '#ECEDFD';
      case 'white':
        return '#F6F6F7';
      default:
        return '#1f1f1f';
    }
  }};
  background-image: ${props =>
    props.background !== 'default'
      ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/${props.background}.jpg")`
      : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: ${props =>
      props.background !== 'default'
        ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Mobile/${props.background}%402x.jpg")`
        : 'none'};
  }

  @media (min-width: 768px) {
    background-image: ${props =>
      props.background !== 'default'
        ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/${props.background}.jpg")`
        : 'none'};
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: ${props =>
        props.background !== 'default'
          ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Tablet/${props.background}%402x.jpg")`
          : 'none'};
    }
  }

  @media (min-width: 1440px) {
    background-image: ${props =>
      props.background !== 'default'
        ? `url("https://res.cloudinary.com/dt8h4kxqx/image/upload/v1691824162/TaskPro/Desktop/${props.background}.jpg")`
        : 'none'};
    @media (min-device-pixel-ratio: 2),
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
  /* width: 375px; */

  min-height: calc(100vh - 64px);
  height: 100%;
  padding: 74px 20px 24px 20px;
  /* margin: 0 auto; */

  overflow-x: auto;

  @media (min-width: 768px) {
    display: flex;
    gap: 34px;
    /* width: 768px; */
    padding: 80px 32px 52px 32px;
  }

  @media (min-width: 1440px) {
    padding: 48px 32px 16px 24px;
    /* width: 1440px; */
    /* padding: 48px 24px 0 284px; */
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

export const MainDashboardAddColumnButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 335px;
  height: 56px;
  padding: 14px 78px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
  /* color: #161616; */
  border-radius: 8px;
  background: #121212;
  /* background: #fff; */
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #000;
    /* background: #e5e5e5; */
  }
`;

export const MainDashboardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: #fff;
  /* background: #000; */
  border-radius: 6px;
`;

export const MainDashboardIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: #121212;
  /* fill: #fff; */
`;

export const FilterContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const ContentHolder = styled.div`
  width: 100%;
`;

export const ContentWrapper = styled.div`
  width: max-content;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  gap: 34px;
`;
