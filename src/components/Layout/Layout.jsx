import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
// import Header from '';
// import Sidebar from '';

export const Layout = () => {
  return (
    <>
      <Header />
      {/* <Sidebar/> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};