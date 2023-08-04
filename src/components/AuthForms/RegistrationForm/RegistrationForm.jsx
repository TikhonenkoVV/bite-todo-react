import {
  Container,
  AuthNavWrapper,
  Link,
} from '../AuthForms.styled';

const RegistrationForm = () => {
  return (
    <Container>
      <AuthNavWrapper>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </AuthNavWrapper>
    </Container>
  );
};

export default RegistrationForm;
