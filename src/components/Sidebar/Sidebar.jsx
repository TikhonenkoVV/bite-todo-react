import { AsideStyled } from './Sidebar.styled';
import { Logo } from './Logo/Logo';
import { ControlBoard } from './ControlBoard/ControlBoard';
import { NeedHelp } from './NeedHelp/NeedHelp';
import { Logout } from './Logout/Logout';

export const Sidebar = () => {
  return (
    <AsideStyled>
      <Logo />
      <ControlBoard />
      <NeedHelp />
      <Logout />
    </AsideStyled>
  );
};
