import React from 'react';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/useModal';

import userdefaultimg from '../../img/Header/user.png';
import EditProfile from './EditProfile';
import { DivInfoUserStyled, TextStyled, DivUserImgStyled, LinkStyled } from './Profile.styled';

const Profile = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const onClickModalOpen = () => {
    openModal();
  };

  return (
    <>
      <DivInfoUserStyled>
        <TextStyled>Name</TextStyled>
        <DivUserImgStyled>
          <LinkStyled onClick={onClickModalOpen}>
            <img width={32} height={32} src={userdefaultimg} alt="userlogo" />
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
