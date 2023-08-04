import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header/Header';
// import Header from '';
// import Sidebar from '';

const Layout = () => {
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

export default Layout;
