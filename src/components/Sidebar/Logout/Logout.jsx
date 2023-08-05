import { Svg } from 'components/SvgIcon/SvgIcon';
import sprite from 'img/icons/sprite.svg';
import { ButtonStyled, PStyled } from './Logout.styled';

const Logout = () => {
  return (
    <ButtonStyled type="button">
      <Svg w={32} h={32} use={`${sprite}#icon-logout`} />
      <PStyled>Log out</PStyled>
    </ButtonStyled>
  );
};

export default Logout;
