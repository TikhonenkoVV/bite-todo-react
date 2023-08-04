import {
  Container,
  AuthNavWrapper,
  Link,
  Input,
  Button,
  Error,
} from '../AuthForms.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'store/auth/operations';

const LoginForm = () => {
  const dispatch = useDispatch();

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
        <Input
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Confirm a password"
        />
        {formik.errors.password && formik.touched.password && (
          <Error>{formik.errors.password}</Error>
        )}
        <Button type="submit">Log In Now</Button>
      </form>
    </Container>
  );
};

export default LoginForm;
