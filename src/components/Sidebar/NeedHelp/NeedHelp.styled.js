import styled from '@emotion/styled';
import flower from 'img/flower.png';

export const DivStyled = styled.div`
  padding: 14px;
  margin: 0 14px;
  width: 197px;
  height: 238px;
  border-radius: 8px;
  background-color: #1f1f1f;

  background-image: url(${flower});
  background-repeat: no-repeat;
  background-position: 14px 14px;
`;

export const PStyled = styled.p`
  margin: 106px 0 18px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const CodeStyled = styled.code`
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
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #fff;
`;
