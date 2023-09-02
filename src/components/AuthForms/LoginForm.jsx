import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'store/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  AuthNavWrapper,
  Link,
  Input,
  InputWrapper,
  Error,
} from './AuthForms.styled';
import { PrimaryButton } from 'components/miniComponents/PrimaryButton/PrimaryButton';
import { ButtonIcon } from 'components/miniComponents/ButtonIcon/ButtonIcon';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoggedIn, isLoggingIn } = useAuth();
  const [inputType, setInputType] = useState('password');
  const [inputIcon, setInputIcon] = useState('eye-allow');

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .trim('Password cannot include spaces')
        .strict(true)
        .min(8, 'Must be not less than 8 characters')
        .max(64, 'Must be 64 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      dispatch(logIn(values));
    },
  });

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/home', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  const togglePasswordVisibility = () => {
    if (inputType === 'password') {
      setInputType('text');
      setInputIcon('eye-denied');
    } else {
      setInputType('password');
      setInputIcon('eye-allow');
    }
  };

  return (
    <>
      {!isLoggingIn && (
        <Container>
          <AuthNavWrapper>
            <Link to="/auth/register">Register</Link>
            <Link to="/auth/login">Log In</Link>
          </AuthNavWrapper>
          <form onSubmit={formik.handleSubmit}>
            <Input
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your email"
            />
            {formik.errors.email && formik.touched.email && (
              <Error>{formik.errors.email}</Error>
            )}
            <InputWrapper>
              <Input
                name="password"
                type={inputType}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Confirm a password"
              />
              <ButtonIcon
                action={togglePasswordVisibility}
                w={18}
                h={18}
                icon={inputIcon}
                style={{
                  position: 'absolute',
                  right: '18px',
                  fill: 'rgba(255, 255, 255, 0.5)',
                }}
              />
            </InputWrapper>
            {formik.errors.password && formik.touched.password && (
              <Error>{formik.errors.password}</Error>
            )}

            <PrimaryButton title="Log In Now" />
          </form>
        </Container>
      )}
      {isLoggingIn && <Loader fill={'#fff'} />}
    </>
  );
};
