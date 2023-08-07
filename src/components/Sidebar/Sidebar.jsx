import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'store/auth/operations';
import { selectIsLoggedIn } from 'store/auth/selectors';

import Logo from './Logo';
import ControlBoard from './ControlBoard';
import NeedHelp from './NeedHelp';
import Logout from './Logout';
import { ContainerSidebar, WrapperBottom } from './Sidebar.styled';

const Sidebar = ({ menuActive }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <ContainerSidebar menuActive={menuActive}>
      <Logo />
      <ControlBoard />
      <WrapperBottom>
        <NeedHelp />
        <Logout logOut={handleLogout} />
      </WrapperBottom>
    </ContainerSidebar>
  );
};

export default Sidebar;
