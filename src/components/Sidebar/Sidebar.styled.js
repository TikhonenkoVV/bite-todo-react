import styled from '@emotion/styled';

export const ContainerSidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 225px;
  height: 100vh;
  display: ${props => (props.menuActive ? 'block' : 'none')};
  background-color: #121212;
  z-index: 1000;
  padding-top: 14px;
  padding-bottom: 24px;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    padding: 24px 0;
    width: 260px;
    grid-row: 1 / 3;
  }
`;

// export const WrapperTop = styled.div`
//   position: absolute;
// `;

export const WrapperBottom = styled.div`
  position: absolute;
  bottom: 0;
`;
