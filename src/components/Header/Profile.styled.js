import styled from '@emotion/styled';

export const DivInfoUserStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DivUserImgStyled = styled.div`
  width: 32px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundUserImgWrapper};
  position: relative;
`;

export const TextStyled = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const AvatarImg = styled.img`
  border-radius: 8px;
  object-fit: cover;
  height: 32px;
`;
