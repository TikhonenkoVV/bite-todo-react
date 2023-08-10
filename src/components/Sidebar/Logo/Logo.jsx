import { Svg } from 'components/SvgIcon/SvgIcon';
import { LinkStyled, PStyled} from './Logo.styled';
import sprite from 'img/icons/sprite.svg';

const Logo = ({styles}) => {
  return (
    <LinkStyled styles={styles}>          
      <Svg styles={styles}
      // w={32} h={32} 
      use={`${sprite}#icon-logo-flash-dark`} />
      <PStyled styles={styles}>Task Pro</PStyled>
    </LinkStyled>
  );
};

export default Logo;
