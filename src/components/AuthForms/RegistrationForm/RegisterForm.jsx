import {
  Container,
  AuthNavWrapper,
  Link,
  Input,
  InputWrapper,
  Button,
  Error,
  ShowButton,
} from '../AuthForms.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'store/auth/operations';
import { useState } from 'react';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [inputType, setInputType] = useState('password');

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, 'Must be not less than 2 characters')
        .max(32, 'Must be 32 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .trim('Password cannot include spaces')
        .strict(true)
        .min(8, 'Must be not less than 8 characters')
        .max(64, 'Must be 64 characters or less')
        .required('Required'),
    }),
    onSubmit: values => {
      dispatch(register(values));
    },
  });

  const togglePasswordVisibility = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  return (
    <Container>
      <AuthNavWrapper>
        <Link to="/auth/register">Registration</Link>
        <Link to="/auth/login">Log In</Link>
      </AuthNavWrapper>
      <form onSubmit={formik.handleSubmit}>
        <Input
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter your name"
        />
        {formik.errors.name && formik.touched.name && (
          <Error>{formik.errors.name}</Error>
        )}
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
            placeholder="Create a password"
          />
          <ShowButton
            type="button"
            onClick={togglePasswordVisibility}
          ></ShowButton>
        </InputWrapper>
        {formik.errors.password && formik.touched.password && (
          <Error>{formik.errors.password}</Error>
        )}
        <Button type="submit">Register Now</Button>
      </form>
    </Container>
  );
};

export default RegisterForm;
