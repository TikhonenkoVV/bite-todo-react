import styled from '@emotion/styled';

export const ColumnContainer = styled.div`
  min-width: 335px;
`;

export const ColumnTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
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

export const AddCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 49px;
  padding: 10px 0px 11px 0px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #161616;
  border-radius: 8px;
  background: #bedbb0;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #9dc888;
  }
`;

export const AddCardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  /* background: #fff; */
  background: #000;
  border-radius: 6px;
`;

export const AddCardIcon = styled.svg`
  width: 14px;
  height: 14px;
  /* fill: #121212; */
  fill: #fff;
`;
