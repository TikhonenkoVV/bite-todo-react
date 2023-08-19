import { useEffect, lazy, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
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
import { theme, devices, baseTransition, priority } from 'styles';
import { forcedLogout, setGoogleTokens } from 'store/auth/slice';

const MainDashboard = lazy(() =>
  import('../pages/MainDashboard/MainDashboard')
);

export const App = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const [currTheme, setCurrTheme] = useState({
    ...theme.dark,
    devices,
    baseTransition,
    priority,
  });
  const selectedTheme = useSelector(selectTheme);
  const { isRefreshing, authError } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    if (accessToken && refreshToken) {
      dispatch(setGoogleTokens({ accessToken, refreshToken }));
      dispatch(refreshUser());
    }
  }, [searchParams, dispatch]);

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

    if (status === 403) {
      dispatch(forcedLogout());
    }

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
    if (!selectedTheme) return;
    if (selectedTheme.toLowerCase() === 'dark') {
      setCurrTheme({ ...theme.dark, devices, baseTransition, priority });
    }
    if (selectedTheme.toLowerCase() === 'light') {
      setCurrTheme({ ...theme.light, devices, baseTransition, priority });
    }
    if (selectedTheme.toLowerCase() === 'violet') {
      setCurrTheme({ ...theme.violet, devices, baseTransition, priority });
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
