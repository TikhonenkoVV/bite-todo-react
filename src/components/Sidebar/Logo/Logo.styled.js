import styled from '@emotion/styled';
import { devices } from 'styles';

export const LogoStyled = styled.div`
  margin-left: ${props =>
    props.styles.marginLeft ? `${props.styles.marginLeft}px` : 0};
  display: flex;
  column-gap: ${props =>
    props.styles.columnGap ? `${props.styles.columnGap}px` : '8px'};
  align-items: center;

  @media screen and (${devices.tablet}) {
    margin-left: ${props =>
      props.styles.marginLeftTab ? `${props.styles.marginLeftTab}px` : 0};
  }
`;

export const IconWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.colors.btnLogOut};
  width: ${props => `${props.styles.width}px`};
  height: ${props => `${props.styles.height}px`};

  @media screen and (${devices.tablet}) {
    width: ${props =>
      props.styles.widthTab
        ? `${props.styles.widthTab}px`
        : `${props.styles.width}px`};
    height: ${props =>
      props.styles.heightTab
        ? `${props.styles.heightTab}px`
        : `${props.styles.height}px`};
  }
`;

export const PStyled = styled.p`
  font-family: Poppins;
  font-size: ${props =>
    props.styles.fontSize ? `${props.styles.fontSize}px` : '16px'};
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: ${props =>
    props.styles.lineHeight ? props.styles.lineHeight : 1.15};
  text-transform: capitalize;

  @media screen and (${devices.tablet}) {
    font-size: ${props =>
      props.styles.fontSizeTab
        ? `${props.styles.fontSizeTab}px`
        : `${props.styles.fontSize}px`};
  }
`;
