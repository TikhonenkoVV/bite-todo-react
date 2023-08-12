import styled from '@emotion/styled';
import { devices } from 'styles';
import flower from 'img/flower.png';

export const DivStyled = styled.div`
  padding: 14px;
  margin: 0 auto;
  width: 197px;
  height: 238px;
  border-radius: 8px;
  background-color: #1f1f1f;

  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.34;
  letter-spacing: -0.02em;

  background-image: url(${flower});
  background-repeat: no-repeat;
  background-position: 14px 14px;

  @media screen and ${devices.tablet} {
    margin-left: 24px;
    padding: 20px;
    width: 212px;
    height: 272px;

    font-size: 14px;
    line-height: 1.42;

    background-position: 20px 20px;
  }
`;

export const PStyled = styled.p`
  margin: 92px 0 15px;
  padding-left: 1px;

  @media screen and ${devices.tablet} {
    margin-bottom: 18px;
  }
`;

export const CodeStyled = styled.code`
  font-family: Poppins;
  color: #bedbb0;
`;

export const ButtonStyled = styled.button`
  display: flex;
  column-gap: 8px;
  align-items: center;

  cursor: pointer;
`;

export const PNeedHelpStyled = styled.p`
  font-size: 12px;
  line-height: 1.34;
  font-weight: 500;
`;
