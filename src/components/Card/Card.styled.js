import styled from '@emotion/styled';
import { priority } from 'styles';

export const CardStyled = styled.div`
  position: relative;
  height: 154px;
  width: 100%;
  padding: 14px 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.card};
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: ${props => priority[props.color]};
  }
`;

export const CardTitleStyled = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  color: ${props => props.theme.colors.cardMajorText};
`;

export const CardDescriptionStyled = styled.p`
  width: 290px;
  height: 2rem;
  margin-bottom: 34px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3333;
  color: ${props => props.theme.colors.cardMinorText};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardFooter = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  &::before {
    content: '';
    position: absolute;
    top: -14px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${props => props.theme.colors.cardDecor};
    z-index: 1;
  }
`;

export const CardParamsWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-right: auto;
`;

export const CardParamsTitle = styled.p`
  margin-bottom: 4px;
  font-size: 8px;
  line-height: 1.5;
  color: ${props => props.theme.colors.cardMinorText};
`;

export const PriorityStatus = styled.p`
  position: relative;
  margin-left: 16px;
  text-transform: capitalize;
  font-size: 10px;
  line-height: 1.5;
  color: ${props => props.theme.colors.cardMajorText};
  &::before {
    content: '';
    position: absolute;
    top: 1.5px;
    left: -16px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => priority[props.color]};
  }
`;

export const DeadlineDate = styled.p`
  font-size: 10px;
  line-height: 1.5;
  color: ${props => props.theme.colors.cardMajorText};
`;

export const ToolsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ToolsButtonBell = styled.button`
  position: relative;
  width: 16px;
  height: 16px;
  margin-right: 12px;
  color: #888888;
  fill: #888888;
  cursor: auto;
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 30px;
    height: 30px;
    transform: translate(-50%, -50%);
    background-image: ${props =>
      props.pastDeadline
        ? 'radial-gradient(circle, red 0%, rgba(255, 0, 0, 0) 70%)'
        : 'radial-gradient(circle, #bedbb070 0%, #bedbb000 70%)'};
  }
`;
