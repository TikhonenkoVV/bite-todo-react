import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout';
import DashboardHeader from './DashboardHeader';

const Welcome = lazy(() => import('../pages/Welcome'));

export const App = () => {
  return (
    <DashboardHeader></DashboardHeader>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<Welcome />} />
    //     {/* <Route path='/auth/:actionId' element={<Register />} /> */}
    //     {/* <Route path='/home' element={<Home />} /> */}
    //     {/* <Route path='/home/:boardName' element={<Home />} /> */}
    //     <Route path="*" element={<Navigate to="/" />} />
    //   </Route>
    // </Routes>
  );
};
