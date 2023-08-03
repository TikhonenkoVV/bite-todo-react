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
`;

const Profile = () => {
  return (
    <div>
      <DivUserImgStyled>
        <img src={userdefaultimg} alt="userlogo" />
        <DivIconPlus></DivIconPlus>
      </DivUserImgStyled>
    </div>
  );
};

export default Profile;
