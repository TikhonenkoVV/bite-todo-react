import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const H2styled = styled.h2`
  margin-top: 70px;
  margin-left: 14px;

  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.boardTitleTextIcon};
  @media screen and (${devices.tablet}) {
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
  border-color: ${props => props.theme.colors.sidebarDecor};
  @media screen and (${devices.tablet}) {
    margin-left: 24px;
    margin-right: 24px;
  }
`;

export const PStyled = styled.p`
  width: 85px;

  font-family: Poppins;
  letter-spacing: -0.02em;
  color: ${props => props.theme.colors.sideBarMainText};
`;

export const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 36px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.btnAddBoard};
  color: ${props => props.theme.colors.btnAddBoardIcon};
  transition: background-color ${baseTransition};
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.btnAddBoardHover};
  }
`;

export const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
`;

export const TrackVertical = styled.div`
  background-color: transparent;
`;
