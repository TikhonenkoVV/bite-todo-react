import { useDispatch } from 'react-redux';
import { logOut } from 'store/auth/operations';

import Logo from './Logo';
import ControlBoard from './ControlBoard';
import NeedHelp from './NeedHelp';
import Logout from './Logout';
import { ContainerSidebar,  WrapperBottom } from './Sidebar.styled';

const Sidebar = ({ menuActive }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

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