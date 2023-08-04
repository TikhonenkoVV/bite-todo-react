import Logo from './Logo';
import ControlBoard from './ControlBoard';
import NeedHelp from './NeedHelp';
import Logout from './Logout';

const Sidebar = () => {
  return (
    <>
      <div>
        <Logo />
        <ControlBoard />
      </div>
      <div>
        <NeedHelp />
        <Logout />
      </div>
    </>
  );
};

export default Sidebar;
