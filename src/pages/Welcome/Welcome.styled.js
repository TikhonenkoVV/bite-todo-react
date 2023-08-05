import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const WelcomePageBg = styled.div`
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
`;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 473px;
  padding: 0 20px;
  gap: 24px;
`;

export const HeroText = styled.p`
color: #161616;
text-align: center;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 400;
// line-height: 18px; /* 128.571% */
`
export const HeroLinkButtonStyled = styled(NavLink)`
display: flex;
width: 344px;
padding: 14px 0px;
justify-content: center;
align-items: center;
border-radius: 8px;
background-color: #161616;
color: #ffffff;
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
// line-height: normal;
`