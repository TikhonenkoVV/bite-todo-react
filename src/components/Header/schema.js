import { object, string } from 'yup';

// const passwordRules =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;

const editProfileScheme = object({
  username: string()
    .min(3, 'User must be at least 3 characters long')
    .required('Required'),
  email: string()
    .email('please enter a valid email address')
    .required('Required'),
  password: string().min(6).required('Required'),
  // .matches(passwordRules, { message: 'Please enter a valid password' })
});

export default editProfileScheme;
