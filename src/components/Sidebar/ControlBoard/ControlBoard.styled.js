import styled from '@emotion/styled';
import Scrollbars from 'react-custom-scrollbars-2';

export const H2styled = styled.h2`
  margin-top: 70px;
  margin-left: 14px;

  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
  @media screen and (min-width: 768px) {
    margin-top: 60px;
    margin-left: 24px;
  }
`;

export const DivStyled = styled.div`
  margin-top: 8px;
  margin-bottom: 40px;
  margin-left: 14px;
  margin-right: 14px;
  height: 70px;
  width: 197px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.1);
  @media screen and (min-width: 768px) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const PStyled = styled.p`
  width: 76px;

  font-family: Poppins;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: #bedbb0;
  color: #121212;

  cursor: pointer;
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const LiStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;

  cursor: pointer;

  &.active {
    background-color: #1f1f1f;
  }
`;

export const DivNameStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  margin-left: 14px;
  margin-right: 14px;

  color: rgba(255, 255, 255, 0.5);

  &.active {
    background-color: #1f1f1f;
    color: #fff;
  }
  @media screen and (min-width: 768px) {
    column-gap: 8px;
    margin-left: 24px;
  }
`;

export const TextStyled = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-family: Poppins;
  letter-spacing: -0.02em;
  &.active {
    color: #fff;
  }
`;

export const DivIconStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding-right: 18px;
  height: 100%;
  color: rgba(255, 255, 255, 0.5);

  &::after {
    content: '';
    position: absolute;
    right: 0;

    width: 4px;
    height: 100%;
    border-radius: 8px 0 0 4px;
    background-color: #bedbb0;
  }
`;

export const ScrollStyled = styled(Scrollbars)`
  right: 0;
  left: auto;
  width: 16px;
  border-radius: 4px;
`;
