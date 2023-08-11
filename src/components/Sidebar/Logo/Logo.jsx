import { Svg } from 'components/SvgIcon/SvgIcon';
import { LogoStyled, IconWrapperStyled, PStyled } from './Logo.styled';
import sprite from 'img/icons/sprite.svg';

const iconStyles = {
  defaultWidth: '100%',
  defaultHeighth: '100%',
};

const Logo = ({styles}) => {
  return (
    <LogoStyled styles={styles}>
      <IconWrapperStyled styles={styles}>
        <Svg
          w={iconStyles.defaultWidth}
          h={iconStyles.defaultHeighth}
          use={`${sprite}#icon-logo-flash-dark`}
        />
      </IconWrapperStyled>
      <PStyled styles={styles}>Task pro</PStyled>
    </LogoStyled>
  );
};

export default Logo;
