import { Logo } from './Logo/Logo';
import { ControlBoard } from './ControlBoard/ControlBoard';
import { NeedHelp } from './NeedHelp/NeedHelp';
import { Logout } from './Logout/Logout';

export const Sidebar = () => {
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
