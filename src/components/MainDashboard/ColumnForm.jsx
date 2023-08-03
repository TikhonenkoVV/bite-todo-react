import React from 'react';
import { Formik, Field, Form } from 'formik';
import {
  FormTitle,
  FormContainer,
  CloseButton,
  AddButton,
  FormInput,
} from './ColumnForm.styled';

const ColumnForm = isEditMode => {
  const title = isEditMode ? 'Edit column' : 'Add column';
  const handleSubmit = () => {};
  return (
    <FormContainer>
      <CloseButton type="button">Close</CloseButton>
      <FormTitle>{title}</FormTitle>
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormInput id="title" name="title" placeholder="Title" />

          <AddButton type="submit">Add</AddButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ColumnForm;
