import React from 'react';
import FormProfile from './FormProfile';
import userdefaultimg from '../../img/Header/user.png';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  DivStyled,
  DivIconClose,
  TextStyled,
  DivItem,
  DivUserImgStyled,
  DivIconPlus,
  IconStyled
} from './EditProfile.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar } from 'store/auth/operations';
import { selectUser } from 'store/auth/selectors';

const baseUrl = 'https://bite-todo-rest-api.onrender.com/api/auth'

const EditProfile = ({ closeModal }) => {
  const dispatch = useDispatch()
  const { avatarURL } = useSelector(selectUser)
  // const [avatarFile, setAvatarFile] = useState(null);
  console.log(avatarURL);


  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatar', file);
      dispatch(updateAvatar(formData));
    }
  }

  // const handleAvatarChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     setAvatarFile(file);
  //   }
  // };



  return (
    <DivStyled>
      <DivIconClose onClick={closeModal}>
        <IconStyled  w={18} h={18} use={`${sprite}#icon-x-close`} />
      </DivIconClose>
      <TextStyled>Edit Profile</TextStyled>
      <DivItem>
        <DivUserImgStyled>
          <img width={68} height={68} src={avatarURL ? `${baseUrl}/${avatarURL}` : userdefaultimg} alt="userlogo" />
          <input type="file" accept="image/*" onChange={handleAvatarChange} hidden id="avatarInput" />
          <DivIconPlus onClick={() => document.getElementById('avatarInput').click()}>
              <Svg w={10} h={10} use={`${sprite}#icon-plus`} />
          </DivIconPlus>
        </DivUserImgStyled>
      </DivItem>
      <FormProfile
        // avatarFile={avatarFile} onAvatarChange={handleAvatarChange}
      />
    </DivStyled>
  );
};

export default EditProfile;
