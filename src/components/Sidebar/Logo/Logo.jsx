import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/auth/selectors';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { LogoStyled, IconWrapperStyled, PStyled } from './Logo.styled';
import sprite from 'img/icons/sprite.svg';

const iconStyles = {
  defaultWidth: '100%',
  defaultHeighth: '100%',
};

const Logo = ({ styles }) => {
  const [nameIcon, setNameIcon] = useState('');
  const selectedTheme = useSelector(selectTheme);

  useEffect(() => {
    if (selectedTheme === 'violet') {
      setNameIcon('flash-light');
      return;
    }
    setNameIcon('flash-dark');
  }, [selectedTheme]);

  return (
    <LogoStyled styles={styles}>
      <IconWrapperStyled styles={styles}>
        <Svg
          w={iconStyles.defaultWidth}
          h={iconStyles.defaultHeighth}
          use={`${sprite}#icon-logo-${nameIcon}`}
        />
      </IconWrapperStyled>
      <PStyled styles={styles}>Task pro</PStyled>
    </LogoStyled>
  );
};

export default Logo;
