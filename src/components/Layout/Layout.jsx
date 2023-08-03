import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import Header from '';
import { Sidebar } from 'components/Sidebar/Sidebar';

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Sidebar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
