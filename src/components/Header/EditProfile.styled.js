import styled from '@emotion/styled';
import { ModalContent } from 'components/Modal/Modal.styled';
import { devices } from 'styles';

export const TextStyled = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  color: ${props => props.theme.colors.titleColor};
  margin-bottom: 24px;
`;

export const DivItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const DivUserImgStyled = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundUserImgWrapper};
  position: relative;
  margin-bottom: 25px;
  color: ${props => props.theme.colors.iconUserColor};
`;

export const AvatarImg = styled.img`
  border-radius: 8px;
  object-fit: cover;
  height: 68px;
`;

export const DivIconPlus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.backgroundAddIcon};
  position: absolute;
  top: 54px;
  right: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.colorAddIcon};
`;

export const ModalContentStyled = styled(ModalContent)`
  @media screen and (${devices.tablet}) {
    width: 400px;
  }
`;
