import { Link } from 'react-router-dom';
import { Hero, WelcomePageBg, HeroText, HeroLinkButtonStyled } from './Welcome.styled';
import Logo from '../../components/Sidebar/Logo/Logo';
import hero1x from '../../img/welcome-img-1x.png';

const Welcome = () => {
  return (
    <WelcomePageBg>
      <Hero>
        <img src={hero1x} alt="hero" />
        <Logo/>
        <HeroText>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </HeroText>      
      <HeroLinkButtonStyled to="auth/register">Registration</HeroLinkButtonStyled>
      <Link to="auth/login">Log In</Link>
      </Hero>
    </WelcomePageBg>
  );
};

export default Welcome;
