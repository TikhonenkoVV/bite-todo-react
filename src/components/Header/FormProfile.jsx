import React from 'react';
import { Formik } from 'formik';
import editProfileScheme from './schema';
import { DivStyled, FromStyled, FieldStyled, BtnSubmitStyled } from './FormProfile.styled';

const FormProfie = () => {
  return (
    <DivStyled>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={editProfileScheme}
      >
        {({ error, touched }) => {
          return (
            <FromStyled>
              <FieldStyled
                className={touched && error ? 'input-error' : ''}
                id="username"
                name="username"
                placeholder="Username"
              />
              {touched && error && <div className="error">{error}</div>}
              <FieldStyled id="email" name="email" placeholder="Email" />
              <FieldStyled id="pasword" name="pasword" placeholder="Password" />
              <BtnSubmitStyled type="submit">Send</BtnSubmitStyled>
            </FromStyled>
          );
        }}
      </Formik>
    </DivStyled>
  );
};

export default FormProfie;
