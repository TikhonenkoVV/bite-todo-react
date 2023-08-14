import React, { useState } from 'react';
import FormProfile from './FormProfile';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  DivStyled,
  DivIconClose,
  TextStyled,
  DivItem,
  DivUserImgStyled,
  DivIconPlus,
  AvatarImg
} from './EditProfile.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

const EditProfile = ({ closeModal }) => {
  const { avatarURL } = useSelector(selectUser)
  const [avatarFile, setAvatarFile] = useState(null);
  const [previewAvatar, setPreviewAvatar] = useState(null);


  const resetAvatar = () => {
  setAvatarFile(null);
  setPreviewAvatar(null);
};



    const handleAvatarChange = (e) => {
      const file = e.target.files[0];
      if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };



  return (
    <DivStyled>
      <DivIconClose onClick={closeModal}>
        <Svg  w={18} h={18} use={`${sprite}#icon-x-close`} />
      </DivIconClose>
      <TextStyled>Edit Profile</TextStyled>
      <DivItem>
        <DivUserImgStyled>
          {previewAvatar
            ? <AvatarImg width={68} height={68} src={previewAvatar} alt="userlogo" />
            : avatarURL
              ? <AvatarImg width={68} height={68} src={avatarURL} alt="userlogo" />
              : <Svg w={68} h={68} use={`${sprite}#icon-user`} />}
          <input width={68} height={68} type="file" accept="image/*" onChange={handleAvatarChange} hidden id="avatarInput" />
          <DivIconPlus onClick={() => document.getElementById('avatarInput').click()}>
              <Svg w={10} h={10} use={`${sprite}#icon-plus`} />
          </DivIconPlus>
        </DivUserImgStyled>
      </DivItem>
      <FormProfile
        avatarFile={avatarFile} onAvatarChange={resetAvatar}
      />
    </DivStyled>
  );
};

export default EditProfile;