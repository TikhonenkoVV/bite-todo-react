import React from 'react';
import styled from '@emotion/styled';
import FormProfie from './FormProfie';
import userdefaultimg from '../../img/Header/user.png';
import sprite from '../../img/icons/sprite.svg';

const DivStyled = styled.div`
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: #151515;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  @media screen and (max-width: 375px) {
    width: 335px;
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

const EditProfile = ({ closeModal }) => {
  return (
    <DivStyled>
      <DivIconClose onClick={closeModal}>
        {/* <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5L4.5 13.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.5 4.5L13.5 13.5"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg> */}
      </DivIconClose>
      <TextStyled>Edit Profile</TextStyled>
      <DivItem>
        <DivUserImgStyled>
          <LinkStyled>
            <img width={68} height={68} src={userdefaultimg} alt="userlogo" />
          </LinkStyled>
          <DivIconPlus>
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
          </DivIconPlus>
        </DivUserImgStyled>
      </DivItem>
      <FormProfie />
    </DivStyled>
  );
};

export default EditProfile;
