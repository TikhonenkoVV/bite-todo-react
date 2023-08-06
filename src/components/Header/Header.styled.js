import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  background-color: #161616;
  color: #ffffff;
  padding: 18px 32px;
  height: 60px;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 68px;
  }
`;

export const DivBtnStyle = styled.div`
  @media screen and (max-width: 768px) {
    width: 32px;
    height: 32px;
    cursor: pointer;
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;
`;
