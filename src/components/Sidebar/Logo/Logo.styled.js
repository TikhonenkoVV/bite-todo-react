import styled from '@emotion/styled';
import { Link } from 'react-router-dom/dist';


export const LinkStyled = styled(Link)`
  margin-left: ${props => props.styles.marginLeft};
  display: flex;
  column-gap: ${props => props.styles.columnGap};
  align-items: center;
  @media screen and (min-width: 768px) {
    margin-left: ${props => props.styles.marginLeftTab};
  }
    // margin-left: 14px;
    // display: flex;
    // column-gap: 8px;
    // align-items: center;
    // @media screen and (min-width: 768px) {
    //   margin-left: 24px;
  // }
`;

export const PStyled = styled.p`
font-family: Poppins;
  font-size: ${props => props.styles.fontSize};
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: ${props => props.styles.lineHeight};
  cursor: pointer;
@media screen and (min-width: 768px) {
    font-size: ${props => props.styles.fontSizeTab};
}
  // font-family: Poppins;
  // font-size: 16px;
  // font-weight: 600;
  // letter-spacing: -0.04em;
  // cursor: pointer;
`;


