import React from 'react';
import FormProfie from './FormProfile';
import userdefaultimg from '../../img/Header/user.png';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  DivStyled,
  DivIconClose,
  Icon, TextStyled, DivItem, DivUserImgStyled, LinkStyled, DivIconPlus
} from './EditProfile.styled';

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
