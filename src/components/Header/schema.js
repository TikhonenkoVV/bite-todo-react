import * as yup from 'yup';

export const userEditScheme = yup.object({
  name: yup
    .string()
    .min(2, 'Must be not less than 2 characters')
    .max(32, 'Must be 32 characters or less')
    .matches(/^[^@]*$/, "Username cannot contain '@' character"),
  email: yup.string().email('Invalid email address'),
  password: yup
    .string()
    .trim('Password cannot include spaces')
    .strict(true)
    .min(8, 'Must be not less than 8 characters')
    .max(64, 'Must be 64 characters or less'),
});

export default userEditScheme;
