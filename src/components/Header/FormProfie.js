import React from 'react';
import { Formik, Form, Field } from 'formik';
import styled from '@emotion/styled';
import editProfileScheme from './schema';

const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

const FromStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

const FieldStyled = styled(Field)`
  width: 100%;
  padding: 14px 18px 14px 18px;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background-color: transparent;

  &::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

const BtnSubmitStyled = styled.button`
  width: 100%;
  padding: 14px 0;
  background-color: #bedbb0;
  color: #161616;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

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
