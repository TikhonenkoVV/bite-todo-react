import React from 'react';
import styled from '@emotion/styled';
import { Formik, Form, Field } from 'formik';

const DivStyled = styled.div`
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: #151515;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.05);
  @media screen and (max-width: 375px) {
    width: 335px;
    height: 440px;
    padding: 24px;
  }
`;

const LinkCloseStyled = styled.a``;

const EditProfile = () => {
  return (
    <DivStyled>
      {/* Icon close */}
      <span>Edit Profile</span>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={value => {
          console.log('Submit form', value);
        }}
      >
        {({ errors, touched }) => {
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Name" />
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="Email" />
            <label htmlFor="pasword">Password</label>
            <Field id="pasword" name="pasword" placeholder="Password" />
            <button type="submit">Send</button>
          </Form>;
        }}
      </Formik>
    </DivStyled>
  );
};

export default EditProfile;
