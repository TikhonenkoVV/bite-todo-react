import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import userEditScheme from './schema';
import {
  FromStyled,
  FieldStyled,
  WrapperInput,
  BtnShowPassword,
  ErrorStyled,
} from './FormProfile.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar, updateUser } from 'store/auth/operations';
import { selectUser } from 'store/auth/selectors';
import { PrimaryButton } from 'components/miniComponents/PrimaryButton/PrimaryButton';

const iconAllow = 'eye-allow';
const iconDenied = 'eye-denied';

const FormProfie = ({ avatarFile, onAvatarChange }) => {
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <Formik
      initialValues={{ name, email, password: '' }}
      validationSchema={userEditScheme}
      onSubmit={(values, { resetForm }) => {
        if (avatarFile) {
          dispatch(updateAvatar(avatarFile));
        }

        dispatch(updateUser(values));
        onAvatarChange();
        resetForm();
      }}
    >
      {({ isSubmitting }) => {
        return (
          <FromStyled>
            <FieldStyled id="name" name="name" placeholder="Username" />
            <ErrorMessage name="name" component={ErrorStyled} />
            <FieldStyled id="email" name="email" placeholder="Email" />
            <ErrorMessage name="email" component={ErrorStyled} />
            <WrapperInput>
              <FieldStyled
                id="password"
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
              />
              <BtnShowPassword
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                <Svg
                  v={18}
                  h={18}
                  icon={showPassword ? iconDenied : iconAllow}
                />
              </BtnShowPassword>
            </WrapperInput>
            <ErrorMessage name="password" component={ErrorStyled} />
            <PrimaryButton disabled={isSubmitting} />
          </FromStyled>
        );
      }}
    </Formik>
  );
};

export default FormProfie;
