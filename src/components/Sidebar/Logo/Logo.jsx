import { Svg } from 'components/SvgIcon/SvgIcon';
import { LinkStyled, PStyled } from './Logo.styled';
import sprite from 'img/icons/sprite.svg';

const Logo = () => {
  return (
    <LinkStyled>
      <Svg w={32} h={32} use={`${sprite}#icon-logo-flash-dark`} />
      <PStyled>Task Pro</PStyled>
    </LinkStyled>
  );
};

export default Logo;
