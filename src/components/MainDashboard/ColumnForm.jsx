import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { addColumn, editColumn } from '../../store/columns/operations';
import sprite from '../../img/icons/sprite.svg';
import * as Yup from 'yup';

import {
  FormTitle,
  FormContainer,
  AddButton,
  FormInput,
  FormIconContainer,
  FormIcon,
  ValidationError,
  TitleContainer,
} from './ColumnForm.styled';
import { useSelector } from 'react-redux';
import { selectColumns } from 'store/columns/selectors';
import { ButtonCloseModal } from 'components/ButtonCloseModal/ButtonCloseModal';

const ColumnFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Please write more than 2 symbol!')
    .max(32, 'Please write less than 32 symbols!')
    .required('Required'),
});

export const ColumnForm = ({
  id,
  boardId,
  isEditMode,
  onCloseForm,
  columnTitle = '',
}) => {
  const dispatch = useDispatch();
  const columns = useSelector(selectColumns);
  const index = columns.length;
  const title = isEditMode ? 'Edit column' : 'Add column';
  const buttonText = isEditMode ? 'Edit' : 'Add';

  const handleSubmit = ({ title }, { resetForm }) => {
    if (isEditMode) {
      dispatch(editColumn({ boardId, id, title, index }));
    } else {
      dispatch(addColumn({ boardId, title, index }));
    }
    resetForm();
    onCloseForm();
  };

  return (
    <FormContainer>
      <ButtonCloseModal onClose={onCloseForm} />
      <FormTitle>{title}</FormTitle>
      <Formik
        initialValues={{
          title: columnTitle,
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
              <div>{buttonText}</div>
            </AddButton>
          </Form>
        )}
      </Formik>
    </FormContainer>
  );
};
