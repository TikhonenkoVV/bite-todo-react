import React from 'react';
import { Formik, Form } from 'formik';
import sprite from '../../img/icons/sprite.svg';
import * as Yup from 'yup';

import {
  FormTitle,
  FormContainer,
  CloseButton,
  AddButton,
  FormInput,
  FormIconContainer,
  FormIcon,
  FormCloseIcon,
  ValidationError,
  TitleContainer,
} from './ColumnForm.styled';

const ColumnFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Please write more than 1 symbol!')
    .max(50, 'Please write less than 50 symbols!')
    .required('Required'),
});

export const ColumnForm = ({ isEditMode, onCloseForm }) => {
  const title = isEditMode ? 'Edit column' : 'Add column';
  const handleSubmit = () => {};
  return (
    <FormContainer>
      <CloseButton type="button" onClick={onCloseForm}>
        <FormCloseIcon>
          <use href={`${sprite}#icon-x-close`}></use>
        </FormCloseIcon>
      </CloseButton>
      <FormTitle>{title}</FormTitle>
      <Formik
        initialValues={{
          title: '',
        }}
        validationSchema={ColumnFormSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <TitleContainer>
              <FormInput id="title" name="title" placeholder="Title" />
              {errors.title && touched.title ? (
                <ValidationError>{errors.title}</ValidationError>
              ) : null}
            </TitleContainer>
            <AddButton type="submit">
              <FormIconContainer>
                <FormIcon>
                  <use href={`${sprite}#icon-plus`}></use>
                </FormIcon>
              </FormIconContainer>
              <div>Add</div>
            </AddButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};

// export default ColumnForm;
