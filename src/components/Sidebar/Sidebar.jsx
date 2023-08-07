import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'store/auth/operations';
import { selectIsLoggedIn } from 'store/auth/selectors';

import Logo from './Logo';
import ControlBoard from './ControlBoard';
import NeedHelp from './NeedHelp';
import Logout from './Logout';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    // if (!isLoggedIn) {
    //   navigate('/welcome', { replace: true });
    // }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div>
        <Logo />
        <ControlBoard />
      </div>
      <div>
        <NeedHelp />
        <Logout logOut={handleLogout} />
      </div>
    </>
  );
};

export default Sidebar;
