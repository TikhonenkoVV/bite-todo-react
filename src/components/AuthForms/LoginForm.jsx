import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { logIn } from 'store/auth/operations';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  Container,
  AuthNavWrapper,
  Link,
  Input,
  InputWrapper,
  Button,
  Error,
  ShowButton,
} from './AuthForms.styled';
import sprite from '../../img/icons/sprite.svg';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [inputType, setInputType] = useState('password');
  const [inputIcon, setInputIcon] = useState('#icon-eye-allow');

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
      isLoggedIn && navigate("/home", { replace: true });
    },
  });

  const togglePasswordVisibility = () => {
    if (inputType === 'password') {
      setInputType('text');
      setInputIcon('#icon-eye-denied');
    } else {
      setInputType('password');
      setInputIcon('#icon-eye-allow');
    }
  };

  return (
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
          <ShowButton type="button" onClick={togglePasswordVisibility}>
            <Svg v={'18px'} h={'18px'} use={`${sprite}${inputIcon}`} />
          </ShowButton>
        </InputWrapper>
        {formik.errors.password && formik.touched.password && (
          <Error>{formik.errors.password}</Error>
        )}
        <Button type="submit">Log In Now</Button>
      </form>
    </Container>
  );
};
