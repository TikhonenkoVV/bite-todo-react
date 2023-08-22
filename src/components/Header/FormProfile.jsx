import React, { useState } from 'react';
import { Formik, ErrorMessage } from 'formik';
import userEditScheme from './schema';
import {
  DivStyled,
  FromStyled,
  FieldStyled,
  WrapperInput,
  BtnShowPassword,
  ErrorStyled,
} from './FormProfile.styled';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { updateAvatar, updateUser } from 'store/auth/operations';
import { selectUser } from 'store/auth/selectors';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';

const iconAllow = '#icon-eye-allow';
const iconDenied = '#icon-eye-denied';

const FormProfie = ({ avatarFile, onAvatarChange }) => {
  const { name, email } = useSelector(selectUser);
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <DivStyled>
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
                    v={'18px'}
                    h={'18px'}
                    use={`${sprite}${showPassword ? iconDenied : iconAllow}`}
                  />
                </BtnShowPassword>
              </WrapperInput>
              <ErrorMessage name="password" component={ErrorStyled} />
              <PrimaryButton
                type="submit"
                disabled={isSubmitting}
                title="Send"
              />
            </FromStyled>
          );
        }}
      </Formik>
    </DivStyled>
  );
};

export default FormProfie;
