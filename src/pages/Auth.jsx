import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { LoginForm } from 'components/AuthForms/LoginForm';
import { RegisterForm } from 'components/AuthForms/RegisterForm';

const REGISTER = 'register';
const LOGIN = 'login';
const bgdStyles = {
  width: '100vw',
  height: '100vh',
  background:
    'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 25%, #BEDBB0 92.19%)',
  position: 'relative',
};

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
    <div style={bgdStyles} onClick={handleBackdropClick}>
      {actionId === REGISTER && <RegisterForm />}
      {actionId === LOGIN && <LoginForm />}
    </div>
  );
};
