import {
  Container,
  AuthNavWrapper,
  Link,
} from '../AuthForms.styled';

const LoginForm = () => {
  return (
    <Container>
      <AuthNavWrapper>
        <Link to="/register">Register</Link>
        <Link to="/login">Log In</Link>
      </AuthNavWrapper>
    </Container>
  );
};

export default LoginForm;
