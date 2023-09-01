import styled from '@emotion/styled';
import { baseTransition, devices } from 'styles';

export const LiStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 70px;
  transition: background-color ${baseTransition};
  cursor: pointer;

  &.active {
    background-color: ${props => props.theme.colors.activeBoardBackground};
  }
`;

export const DivNameStyled = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
  margin-left: 14px;
  margin-right: 14px;

  fill: ${props => props.theme.colors.boardTitleTextIcon};
  color: ${props => props.theme.colors.boardTitleTextIcon};

  &.active {
    fill: ${props => props.theme.colors.sideBarMainText};
    color: ${props => props.theme.colors.sideBarMainText};
  }
  @media screen and (${devices.tablet}) {
    column-gap: 8px;
    margin-left: 24px;
  }
`;

export const TextStyled = styled.p`
  font-family: Poppins;
  letter-spacing: -0.02em;
  width: 120px;
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
    height: 96%;
    border-radius: 8px 0 0 4px;
    background-color: ${props => props.theme.colors.btnLogOut};
  }
`;

export const ButtonEdit = styled.button`
  color: ${props => props.theme.colors.boardTitleTextIcon};
  transition: color ${baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.sideBarMainText};
  }
`;

export const ButtonDelete = styled.button`
  color: ${props => props.theme.colors.boardTitleTextIcon};
  transition: color ${baseTransition};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.sideBarMainText};
  }
`;
