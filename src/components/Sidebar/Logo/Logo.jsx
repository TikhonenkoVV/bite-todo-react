import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from 'store/auth/selectors';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { LogoStyled, IconWrapperStyled, PStyled } from './Logo.styled';

const Logo = ({ styles }) => {
  const [nameIcon, setNameIcon] = useState('');
  const selectedTheme = useSelector(selectTheme);

  useEffect(() => {
    if (!selectedTheme) return;
    if (selectedTheme.toLowerCase() === 'violet') {
      setNameIcon('logo-flash-light');
      return;
    }
    setNameIcon('logo-flash-dark');
  }, [selectedTheme]);

  return (
    <LogoStyled styles={styles}>
      <IconWrapperStyled styles={styles}>
        <Svg
          w={32}
          h={32}
          icon={nameIcon}
        />
      </IconWrapperStyled>
      <PStyled styles={styles}>Task pro</PStyled>
    </LogoStyled>
  );
};

export default Logo;
