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

const DivIconPlus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 8px;
  background-color: #bedbb0;
  position: absolute;
  top: 54px;
  right: 22px;
  text-align: center;
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
          {/* <DivIconPlus>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 2.08325V7.91659"
              stroke="#161616"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.08331 5H7.91665"
              stroke="#161616"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>  
        </DivIconPlus> */}
        </DivUserImgStyled>
      </DivInfoUserStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditProfile />
        </Modal>
      )}
    </>
  );
};

export default Profile;
