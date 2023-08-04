import LoginForm from 'components/AuthForms/LoginForm';
import RegisterForm from 'components/AuthForms/RegistrationForm';
import { useParams } from 'react-router-dom';

const REGISTER = 'register';
const LOGIN = 'login';
const bgdStyles = {
  width: '100vw',
  height: '100vh',
  background:
    'linear-gradient(180deg, rgba(196, 196, 196, 0.00) 25%, #BEDBB0 92.19%)',
  position: 'relative',
};

const Auth = () => {
  const { actionId } = useParams();

  return (
    <div style={bgdStyles}>
      {actionId === REGISTER && <RegisterForm />}
      {actionId === LOGIN && <LoginForm />}
    </div>
  );
};

export default Auth;
