import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { devices } from 'styles';

export const Container = styled.div`
  padding: 24px;
  border-radius: 8px;
  background: #151515;

  min-height: 300px;
  width: 335px;

  @media screen and (${devices.tablet}) {
    padding: 40px;
    min-width: 424px;
    min-height: 332px;
  }
`;

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
  height: 27px;
`;

export const Link = styled(NavLink)`
  font-family: Poppins;
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.36px;

  &.active {
    color: rgba(255, 255, 255, 1);
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  margin-top: 14px;

  &:first-of-type {
    margin-top: 0;
  }

  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #1f1f1f;
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.28px;

  &:focus {
    opacity: 1;
    border: 1px solid #bedbb0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 49px;
  margin-top: 14px;
  margin-bottom: 24px;
`;

export const Error = styled.p`
  color: #ed4337;
  font-family: Poppins;
  font-size: 12px;
  margin-top: 8px;
`;