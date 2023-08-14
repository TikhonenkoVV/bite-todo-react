import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { devices, baseTransition } from '../../styles/theme';

export const WelcomePageStyled = styled.div`
  background: linear-gradient(
    180deg,
    rgba(196, 196, 196, 0) 25%,
    #bedbb0 92.19%
  );
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  gap: 48px;
`;

export const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 473px;
  gap: 24px;
`;
export const ImgWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 14px;
  @media screen and (${devices.tablet}) {
    gap: 24px;
  }
`;

export const ImgSetStyled = styled.picture`
  width: 124px;
  @media screen and (${devices.tablet}) {
    width: 162px;
  }
`;

export const HeroTextStyled = styled.p`
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;

export const LinkWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 14px;
`;

export const LinkButtonStyled = styled(NavLink)`
  display: flex;
  width: 100%;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #161616;
  color: #ffffff;
  font-weight: 500;
  transition: color, background-color ${baseTransition};
  @media screen and (${devices.mobile}) {
    width: 335px;
  }
  @media screen and (${devices.tablet}) {
    width: 344px;
  }
  &:hover {
    color: #161616;
    background-color: #9dc888;
  }
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 500;
  transition: color ${baseTransition};
  &:hover {
    color: #9dc888;
  }
`;

export const GoogleBtn = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
  height: 46px;
  font-weight: 500;
  border-radius: 8px;
  background-color: #fff;
  transition: color, background-color ${baseTransition};
  @media screen and (${devices.mobile}) {
    width: 335px;
  }
  @media screen and (${devices.tablet}) {
    width: 344px;
  }
  &:hover {
    background-color: #9dc888;
  }
`;
