import styled from '@emotion/styled';

export const Icon = styled.svg`
  fill: currentColor;
  width: ${props => props.styles.width};
  height: ${props => props.styles.height};
  @media screen and (min-width: 768px) {
    width: ${props => props.styles.widthTab};
  height: ${props => props.styles.heightTab};
  }
`;
