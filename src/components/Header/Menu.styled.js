import styled from '@emotion/styled';

export const DivBtnBurgerMenuStyled = styled.div`
  @media screen and (max-width: 768px) {
    position: fixed;
    width: 225px;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate(-100%);
    transition: transform 0.2s;

    &.active {
      transform: translate(0);
    }
  }

  @media screen and (min-width: 768px) {
    position: fixed;
    width: 260px;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translate(-100%);
    transition: transform 0.2s;

    &.active {
      transform: translate(0);
    }
  }
`;

export const DivSideBarContentStyled = styled.div`
  padding-top: 14px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: black;
    transition: transform 0.4s;
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 100%;
    background-color: black;
    transition: transform 0.4s;
    padding-top: 24px;
  }
`;
