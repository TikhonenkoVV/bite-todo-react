import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { refreshUser, refreshToken } from 'store/auth/operations';
import { selectAuthError, selectIsLoggedIn } from 'store/auth/selectors';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Layout } from './Layout/Layout';
import Welcome from '../pages/Welcome/Welcome';
import { Auth } from '../pages/Auth';
import MainDashboard from '../pages/MainDashboard/MainDashboard';

export const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authError = useSelector(selectAuthError);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (authError.message === 'Token expired') {
      dispatch(refreshToken());
      dispatch(refreshUser());
    }

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
    // if (isLoggedIn) {
    //   navigate('/home', { replace: true });
    // }
  }, [isLoggedIn, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/auth/:actionId" element={<Auth />} />
      <Route path="/home" element={<Layout />}>
        <Route index element={<MainDashboard />} />
        <Route path="/home/:boardName" element={<MainDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
