import styled from '@emotion/styled';

export const ColumnContainer = styled.div`
  min-width: 335px;
`;

export const ColumnTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px 17px 20px;
  height: 56px;
  border-radius: 8px;
  background: #121212;
`;

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #fff;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 40px;
  height: 16px;
`;

export const TitleIcon = styled.svg`
  width: 16px;
  height: 16px;
  /* fill: #121212; */
  fill: #fff;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;
