import styled from '@emotion/styled';

const currTheme = 'dark';

export const ColumnContainer = styled.div`
  max-width: 335px;
`;

export const ColumnTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  padding: 18px 20px 17px 20px;
  height: 56px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors[currTheme].card};
`;

export const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${props => props.theme.colors[currTheme].titleColor};
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
  fill: ${props => props.theme.colors[currTheme].iconFill};
  transition: fill ${props => props.theme.baseTransition};
  &:hover,
  &:focus {
    fill: ${props => props.theme.colors[currTheme].iconHover};
  }
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
  border-radius: 8px;
  color: ${props => props.theme.colors[currTheme].addButtonColor};
  background: ${props => props.theme.colors[currTheme].addButtonBackground};
  transition: background ${props => props.theme.baseTransition};
  &:hover,
  &:focus {
    background: ${props =>
      props.theme.colors[currTheme].addButtonHoverBackground};
  }
`;

export const AddCardIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  background: ${props => props.theme.colors[currTheme].buttonIconBackground};
  border-radius: 6px;
`;

export const AddCardIcon = styled.svg`
  width: 14px;
  height: 14px;
  fill: ${props => props.theme.colors[currTheme].buttonIconFill};
`;
