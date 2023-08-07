import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { addColumn, editColumn } from '../../store/columns/operations';
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
    .min(2, 'Please write more than 2 symbol!')
    .max(32, 'Please write less than 32 symbols!')
    .required('Required'),
});

export const ColumnForm = ({ id, boardId, cards, isEditMode, onCloseForm }) => {
  const title = isEditMode ? 'Edit column' : 'Add column';
  const dispatch = useDispatch();

  const handleSubmit = ({ title }, { resetForm }) => {
    if (isEditMode) {
      dispatch(editColumn({ boardId, id, title, cards }));
    } else {
      dispatch(addColumn({ boardId, title, cards: [] }));
    }
    resetForm();
    onCloseForm();
  };

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
        onSubmit={(values, actions) => handleSubmit(values, actions)}
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
