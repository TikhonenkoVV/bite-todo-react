import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser, refreshToken } from 'store/auth/operations';
import { selectAuthError } from 'store/auth/selectors';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Welcome from '../pages/Welcome/Welcome';
import { Auth } from '../pages/Auth';
import MainDashboard from '../pages/MainDashboard/MainDashboard';

export const App = () => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (authError === 'Token expired') {
      dispatch(refreshToken());
      dispatch(refreshUser());
    }
  }, [dispatch, authError]);

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/auth/:actionId" element={<Auth />} />

      {/* цей шлях не відповідає ТЗ */}
      {/* <Route path="/auth" element={<Navigate to="/auth/register" />} /> */}

      <Route path="/home" element={<Layout />}>
        <Route index element={<MainDashboard />} />
        <Route path="/home/:boardName" element={<MainDashboard />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
