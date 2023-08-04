import styled from '@emotion/styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  list-style-type: none;
`;

export const H2styled = styled.h2`
  margin-top: 70px;
  margin-left: 14px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: rgba(255, 255, 255, 0.5);
`;

export const DivStyled = styled.div`
  margin-top: 8px;
  margin-bottom: 58px;
  margin-left: 14px;
  height: 70px;
  width: 197px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-top: 1px solid;
  border-bottom: 1px solid;
  border-color: rgba(255, 255, 255, 0.1);
`;

export const PStyled = styled.p`
  width: 76px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
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

  cursor: pointer;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;
  background-color: #1f1f1f;

  cursor: pointer;
`;

export const DivNameStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  margin-left: 14px;
`;

export const SvgStyled = styled(Svg)`
  fill: black;
`;

export const H3Styled = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.02em;
  color: #fff;
`;

export const DivIconStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 8px;
  padding-right: 18px;
  height: 100%;

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
