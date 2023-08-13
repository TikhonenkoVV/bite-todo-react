import { useEffect, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PrivateRoute } from './privateRoute';
import { RestrictedRoute } from './restrictedRoute';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'store/auth/operations';
import { selectTheme } from 'store/auth/selectors';
import { Loader } from './Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Layout } from './Layout/Layout';
import Welcome from '../pages/Welcome/Welcome';
import { Auth } from '../pages/Auth/Auth';
import { ThemeProvider } from '@emotion/react';
import { theme } from 'styles';

const MainDashboard = lazy(() =>
  import('../pages/MainDashboard/MainDashboard')
);

export const App = () => {
  const dispatch = useDispatch();
  const [currTheme, setCurrTheme] = useState({ ...theme.dark });
  const selectedTheme = useSelector(selectTheme);
  const { isRefreshing, authError } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    const { message, status } = authError;
    if (!message) return;

    if (message === 'Unable to fetch user') return;

    Notify.init({
      fontFamily: 'Poppins',
      timeout: 4000,
      clickToClose: true,
      warning: {
        background: '#ff5549',
      },
    });

    if (
      message === 'Invalid token' ||
      message === 'Unsupported token' ||
      (status === 401 && message !== 'Email or password invalid')
    ) {
      Notify.warning('Please login again');
      return;
    }

    Notify.warning(`${authError.message}`);
  }, [dispatch, authError]);

  useEffect(() => {
    if (selectedTheme === 'dark') {
      setCurrTheme({ ...theme.dark });
    }
    if (selectedTheme === 'light') {
      setCurrTheme({ ...theme.light });
    }
    if (selectedTheme === 'violet') {
      setCurrTheme({ ...theme.violet });
    }
  }, [selectedTheme]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <ThemeProvider theme={currTheme}>
      <Routes>
        <Route
          path="/"
          element={
            <RestrictedRoute redirectTo="/home" component={<Welcome />} />
          }
        />
        <Route
          path="/auth/:actionId"
          element={<RestrictedRoute redirectTo="/home" component={<Auth />} />}
        />
        <Route path="/home" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute redirectTo="/" component={<MainDashboard />} />
            }
          />
          <Route
            path="/home/:boardName"
            element={
              <PrivateRoute redirectTo="/" component={<MainDashboard />} />
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};
