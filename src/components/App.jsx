// import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import Welcome from '../pages/Welcome';
import { Auth } from '../pages/Auth';

// const Home = lazy(() => import('../pages/Home'));

export const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Welcome />}></Route>
      <Route path="/auth/:actionId" element={<Auth />} />
      <Route path="/auth" element={<Navigate to="/auth/register" />} />
      <Route path="/home" element={<Layout />}>
        {/* <Route index element={<Home />} /> */}
        {/* <Route path='/home/:boardName' element={<Home />} /> */}
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
