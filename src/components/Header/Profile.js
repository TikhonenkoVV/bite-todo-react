import styled from '@emotion/styled';
import React from 'react';
import { Modal } from 'components/Modal';
import { useModal } from 'hooks/useModal';

import userdefaultimg from '../../img/Header/user.png';
import EditProfile from './EditProfile';

const DivInfoUserStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const DivUserImgStyled = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background-color: #1f1f1f;
  position: relative;
`;

const TextStyled = styled.span`
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

const LinkStyled = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

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
