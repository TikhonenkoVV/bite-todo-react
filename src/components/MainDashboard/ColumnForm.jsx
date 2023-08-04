import React from 'react';
import { Formik, Field, Form } from 'formik';
import sprite from '../../img/icons/sprite.svg';

import {
  FormTitle,
  FormContainer,
  CloseButton,
  AddButton,
  FormInput,
  ColumnFormIconContainer,
  ColumnFormIcon,
  ColumnFormCloseIcon,
} from './ColumnForm.styled';

const ColumnForm = ({ isEditMode, onCloseForm }) => {
  const title = isEditMode ? 'Edit column' : 'Add column';
  const handleSubmit = () => {};
  return (
    <FormContainer>
      <CloseButton type="button" onClick={onCloseForm}>
        <ColumnFormCloseIcon>
          <use href={`${sprite}#icon-x-close`}></use>
        </ColumnFormCloseIcon>
      </CloseButton>
      <FormTitle>{title}</FormTitle>
      <Formik
        initialValues={{
          title: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormInput id="title" name="title" placeholder="Title" />

          <AddButton type="submit">
            <ColumnFormIconContainer>
              <ColumnFormIcon>
                <use href={`${sprite}#icon-plus`}></use>
              </ColumnFormIcon>
            </ColumnFormIconContainer>
            <div>Add</div>
          </AddButton>
        </Form>
      </Formik>
    </FormContainer>
  );
};

export default ColumnForm;
