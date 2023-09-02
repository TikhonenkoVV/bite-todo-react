import { Svg } from 'components/SvgIcon/SvgIcon';
import { ButtonStyled, Container, PStyled } from './Logout.styled';

const Logout = ({ logOut }) => {
  return (
    <ButtonStyled onClick={logOut} type="button">
      <Container>
        <Svg w={32} h={32} icon='logout' />
      </Container>
      <PStyled>Log out</PStyled>
    </ButtonStyled>
  );
};

export default Logout;
