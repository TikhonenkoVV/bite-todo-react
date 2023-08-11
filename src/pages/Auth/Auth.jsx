import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LoginForm } from 'components/AuthForms/LoginForm';
import { RegisterForm } from 'components/AuthForms/RegisterForm';
import { Container } from './Auth.styled';

const REGISTER = 'register';
const LOGIN = 'login';

export const Auth = () => {
  const { actionId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      navigate('/');
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      navigate('/');
    }
  };

  return (
    <Container onClick={handleBackdropClick}>
      {actionId === REGISTER && <RegisterForm />}
      {actionId === LOGIN && <LoginForm />}
    </Container>
  );
};
