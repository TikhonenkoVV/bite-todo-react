import styled from '@emotion/styled';
import React from 'react';

import userdefaultimg from '../../img/Header/user.png';

const DivUserImgStyled = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 8px;
  background-color: #1f1f1f;
  position: relative;
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
`;

const Profile = () => {
  return (
    <div>
      <DivUserImgStyled>
        <img src={userdefaultimg} alt="userlogo" />
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
          </svg>{' '}
        </DivIconPlus>
      </DivUserImgStyled>
    </div>
  );
};

export default Profile;
