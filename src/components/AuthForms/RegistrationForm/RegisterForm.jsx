import {
  Container,
  AuthNavWrapper,
  Link,
  Input,
  Button,
} from '../AuthForms.styled';

const RegisterForm = () => {
  return (
    <Container>
      <AuthNavWrapper>
        <Link to="/auth/register">Registration</Link>
        <Link to="/auth/login">Log In</Link>
      </AuthNavWrapper>
      <form>
        <Input placeholder="Enter your name" />
        <Input placeholder="Enter your email" />
        <Input placeholder="Create a password" />
        <Button>Register Now</Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
