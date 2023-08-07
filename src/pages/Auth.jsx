import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectAuthError } from 'store/auth/selectors';
import { LoginForm } from 'components/AuthForms/LoginForm';
import { RegisterForm } from 'components/AuthForms/RegisterForm';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

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
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    if (authError.message === 'Unable to fetch user') return;

    Notify.init({
      fontFamily: 'Poppins',
      timeout: 4000,
      clickToClose: true,
      warning: {
        background: '#ff5549',
      },
    });

    if (authError.message) {
      switch (authError.status) {
        case 401:
          Notify.warning('Invalid email or password');
          break;

        case 409:
          Notify.warning('This user is already registered');
          break;

        default:
          Notify.warning(`${authError.message}`);
      }
    }
  }, [dispatch, authError]);

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
