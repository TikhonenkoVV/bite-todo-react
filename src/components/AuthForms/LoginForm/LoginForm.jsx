import {
  Container,
  AuthNavWrapper,
  Link,
  Input,
  Button,
} from '../AuthForms.styled';

const LoginForm = () => {
  return (
    <Container>
      <AuthNavWrapper>
        <Link to="/auth/register">Register</Link>
        <Link to="/auth/login">Log In</Link>
      </AuthNavWrapper>
      <form>
        <Input placeholder="Enter your email" />
        <Input placeholder="Confirm a password" />
        <Button>Log In Now</Button>
      </form>
    </Container>
  );
};

export default LoginForm;
