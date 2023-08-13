import React from 'react';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/useModal';

import EditProfile from './EditProfile';
import { DivInfoUserStyled, TextStyled, DivUserImgStyled, LinkStyled, AvatarImg } from './Profile.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

const baseUrl = 'https://bite-todo-rest-api.onrender.com'

const Profile = () => {
  const { name, avatarURL } = useSelector(selectUser)

  const { isModalOpen, openModal, closeModal } = useModal();

  const onClickModalOpen = () => {
    openModal();
  };

  return (
    <>
      <DivInfoUserStyled>
        <TextStyled>{name}</TextStyled>
        <DivUserImgStyled>
          <LinkStyled onClick={onClickModalOpen}>
            <AvatarImg width={32} height={32} src={avatarURL ? avatarURL : `${baseUrl}/avatars/user.png`} alt="userlogo" />
          </LinkStyled>
        </DivUserImgStyled>
      </DivInfoUserStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditProfile closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default Profile;