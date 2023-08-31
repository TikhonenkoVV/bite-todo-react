import { useSelector } from 'react-redux';
import { selectIsRefreshing } from 'store/auth/selectors';
import TabHeroImg from '../../img/Tablet/welcome-img.png';
import TabHeroImg2x from '../../img/Tablet/welcome-img@2x.png';
import TabHeroImg3x from '../../img/Tablet/welcome-img@3x.png';
import {
  WelcomePageStyled,
  HeroStyled,
  ImgWrapperStyled,
  LinkWrapperStyled,
  ImgSetStyled,
  HeroTextStyled,
  LinkButtonStyled,
  LinkStyled,
  GoogleBtn,
} from './Welcome.styled';
import { Loader } from 'components/Loader/Loader';
import Logo from '../../components/Sidebar/Logo/Logo';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { BASE_URL } from 'services/constants';

const logoStyles = {
  columnGap: 14,
  fontSize: 28,
  fontSizeTab: 40,
  lineHeight: 1.15,
  width: 40,
  height: 40,
  widthTab: 48,
  heightTab: 48,
};

const Welcome = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <>
      {!isRefreshing && (
        <WelcomePageStyled>
          <HeroStyled>
            <ImgWrapperStyled>
              <ImgSetStyled>
                <img
                  src={TabHeroImg}
                  srcSet={`${TabHeroImg} 1x, ${TabHeroImg2x} 2x, ${TabHeroImg3x} 3x`}
                  type="image/png"
                  alt="The guy is working on a laptop"
                />
              </ImgSetStyled>
            </ImgWrapperStyled>
            <Logo styles={logoStyles} />
            <HeroTextStyled>
              Supercharge your productivity and take control of your tasks with
              Task Pro - Don't wait, start achieving your goals now!
            </HeroTextStyled>
          </HeroStyled>
          <LinkWrapperStyled>
            <LinkButtonStyled to="auth/register">Registration</LinkButtonStyled>
            <LinkStyled to="auth/login">Log In</LinkStyled>
            <GoogleBtn href={`${BASE_URL}/api/auth/google`}>
              <Svg w={32} h={32} icon='google' />
              Log In with Google
            </GoogleBtn>
          </LinkWrapperStyled>
        </WelcomePageStyled>
      )}
      {isRefreshing && <Loader fill={'#fff'} />}
    </>
  );
};

export default Welcome;
