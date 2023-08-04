import React from 'react';
import styled from '@emotion/styled';
import FormProfie from './FormProfie';
import userdefaultimg from '../../img/Header/user.png';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';

const DivStyled = styled.div`
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: #151515;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  @media screen and (max-width: 768px) {
    width: 335px;
    height: 440px;
    padding: 24px;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
    height: 440px;
    padding: 24px;
  }
`;

const DivIconClose = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;

const TextStyled = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  color: #ffffff;
  margin-bottom: 24px;
`;

const DivItem = styled.div`
  display: flex;
  justify-content: center;
`;

const DivUserImgStyled = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  background-color: #1f1f1f;
  position: relative;
  margin-bottom: 25px;
`;

const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const DivIconPlus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #bedbb0;
  position: absolute;
  top: 54px;
  right: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Icon = styled(Svg)`
  stroke: white;
`;

const EditProfile = ({ closeModal }) => {
  return (
    <DivStyled>
      <DivIconClose onClick={closeModal}>
        <Icon w={18} h={18} use={`${sprite}#icon-x-close`} />
      </DivIconClose>
      <TextStyled>Edit Profile</TextStyled>
      <DivItem>
        <DivUserImgStyled>
          <LinkStyled>
            <img width={68} height={68} src={userdefaultimg} alt="userlogo" />
          </LinkStyled>
          <DivIconPlus>
            <Svg w={10} h={10} use={`${sprite}#icon-plus`} />
          </DivIconPlus>
        </DivUserImgStyled>
      </DivItem>
      <FormProfie />
    </DivStyled>
  );
};

export default EditProfile;
