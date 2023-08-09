import React, { useEffect } from 'react';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/useModal';

import userdefaultimg from '../../img/Header/user.png';
import EditProfile from './EditProfile';
import { DivInfoUserStyled, TextStyled, DivUserImgStyled, LinkStyled } from './Profile.styled';
import { useSelector } from 'react-redux';
import { selectUser } from 'store/auth/selectors';

const Profile = () => {
  const {name} = useSelector(selectUser)

  const { isModalOpen, openModal, closeModal } = useModal();

  useEffect(()=>{}, [])

  const onClickModalOpen = () => {
    openModal();
  };

  return (
    <>
      <DivInfoUserStyled>
        <TextStyled>{name}</TextStyled>
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