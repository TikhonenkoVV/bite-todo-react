import styled from '@emotion/styled';


import { devices } from 'styles';

export const FormBox = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 335px;
  color: ${props => props.theme.colors.textColorForm};
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: ${props => props.theme.colors.background};
  padding: 24px;
  @media screen and (${devices.tablet}) {
    max-width: 350px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.textColorForm};
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;
