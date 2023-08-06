import styled from '@emotion/styled';

export const CardStyled = styled.li`
  position: relative;
  height: 154px;
  /* width: 100%; */
  width: 334px;
  padding: 14px 24px;
  border-radius: 8px;
  background-color: ${props => props.theme['dark'].cardColor};
  overflow: hidden;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background-color: #8fa1d0;
  }
`;

export const CardTitleStyled = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  color: ${props => props.theme['dark'].cardMajorColor};
`;

export const CardDescriptionStyled = styled.p`
  height: 2rem;
  margin-bottom: 34px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.3333;
  color: ${props => props.theme['dark'].cardMinorColor};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardParamsWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const CardParamsTitle = styled.p`
  margin-bottom: 4px;
  font-size: 8px;
  line-height: 1.5;
  color: ${props => props.theme['dark'].cardMinorColor};
`;

export const PriorityStatus = styled.p`
  position: relative;
  margin-left: 16px;
  font-size: 10px;
  line-height: 1.5;
  color: ${props => props.theme['dark'].cardMajorColor};
  &::before {
    content: '';
    position: absolute;
    top: 1.5px;
    left: -16px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #8fa1d0;
  }
`;

export const DeadlineDate = styled.p`
  font-size: 10px;
  color: ${props => props.theme['dark'].cardMajorColor};
`;

export const ToolsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
