import styled from '@emotion/styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const DivStyled = styled.div`
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: #151515;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  @media screen and (max-width: 768px) {
    width: 335px;
    padding: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    padding: 24px;
  }
`;

export const DivIconClose = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  color: #ffffff;
`;

export const TextStyled = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const DivItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivUserImgStyled = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  background-color: #1f1f1f;
  position: relative;
  margin-bottom: 25px;
`;

export const AvatarImg = styled.img`
  border-radius: 8px;
  object-fit: cover;
  height: 68px;
`;

export const DivIconPlus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #bedbb0;
  position: absolute;
  top: 54px;
  right: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconStyled = styled(Svg)`
  fill: #ffffff;
`;
