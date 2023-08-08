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
  LinkStyled
} from './Welcome.styled';
import { Loader } from 'components/Loader/Loader';
import Logo from '../../components/Sidebar/Logo/Logo';

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
              {/* створити можливість передавати стилі (розмір) в Лого пропсами */}
              <Logo />
            </ImgWrapperStyled>
            <HeroTextStyled>
              Supercharge your productivity and take control of your tasks with Task Pro - Don't wait, start achieving your goals now!
            </HeroTextStyled>
          </HeroStyled>
          <LinkWrapperStyled>
            <LinkButtonStyled to="auth/register">
              Registration
            </LinkButtonStyled>
            <LinkStyled to="auth/login">Log In</LinkStyled>
          </LinkWrapperStyled>
        </WelcomePageStyled>
      )}
      {isRefreshing && <Loader fill={'#fff'} />}
    </>
  );
};

export default Welcome;
