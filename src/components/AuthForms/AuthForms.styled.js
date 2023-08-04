import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  padding: 40px;
  border-radius: 8px;
  background: #151515;

  width: 424px;
  min-height: 332px;
`;

export const RegisterForm = styled.form``;

export const LoginForm = styled.form``;

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const Link = styled(NavLink)`
  color: rgba(255, 255, 255, 0.3);
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;

  &.active {
    color: rgba(255, 255, 255, 1);
  }

  &:hover,
  &:focus {
  }
`;
