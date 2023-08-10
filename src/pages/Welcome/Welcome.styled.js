import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { theme } from '../../styles/theme';

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
  @media screen and ${theme.devices.tablet} {
    gap: 24px;
  }
`;

export const ImgSetStyled = styled.picture`
  width: 124px;
  @media screen and ${theme.devices.tablet} {
    width: 162px;
  }
`;

export const LogoStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.styles.gap};
`;

export const IconWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.styles.width};
  height: ${props => props.styles.height};

  @media screen and ${theme.devices.tablet} {
    width: ${props => props.styles.widthTab};
    height: ${props => props.styles.heightTab};
  }
`;

export const LogoTextStyled = styled.p`
font-family: Poppins;
  font-size: ${props => props.styles.fontSize};
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1.5;
  text-transform: capitalize;
@media screen and ${theme.devices.tablet} {
    font-size: ${props => props.styles.fontSizeTab}
`;

export const HeroTextStyled = styled.p`
  color: #161616;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  // line-height: 18px; /* 128.571% */
`;

export const LinkWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 14px;  
  }
`;

export const LinkButtonStyled = styled(NavLink)`
  display: flex;
  width: 335px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #161616;
  color: #ffffff;
  font-weight: 500;
  @media screen and ${theme.devices.tablet} {
    width: 344px;
  }
  &:hover {
    color: #161616;
    background-color: #9dc888;
  }
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 500;
  &:hover {
    color: #9dc888;
  }
`;
