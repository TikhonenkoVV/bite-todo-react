import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import { useState } from 'react';
import { Backdrop, Wrapper, WrapperMain } from './Layout.styled';

export const Layout = () => {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => {
    setMenuActive(prevMenuActive => !prevMenuActive);
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setMenuActive(false);
    }
  };

  return (
    <Wrapper>
      <Header
        menuActive={menuActive}
        setMenuActive={setMenuActive}
        toggleMenu={toggleMenu}
      />
      <Sidebar menuActive={menuActive} />
      <WrapperMain>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </WrapperMain>
      {menuActive && <Backdrop onClick={handleBackdropClick} />}
    </Wrapper>
  );
};
