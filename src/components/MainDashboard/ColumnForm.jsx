import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import { addColumn, editColumn } from '../../store/columns/operations';
import * as Yup from 'yup';

import {
  FormTitle,
  FormInput,
  ValidationError,
  TitleContainer,
} from './ColumnForm.styled';
import { useSelector } from 'react-redux';
import { selectColumns } from 'store/columns/selectors';
import { ButtonCloseModal } from 'components/miniComponents/ButtonCloseModal/ButtonCloseModal';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { IconAddEditDeleteModal } from 'components/miniComponents/IconAddEditDeleteModal/IconAddEditDeleteModal';
import { ModalContent } from 'components/Modal/Modal.styled';

const ColumnFormSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Please write more than 2 symbol!')
    .max(32, 'Please write less than 32 symbols!'),
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
  const icon = isEditMode ? 'pencil' : 'plus';

  const handleSubmit = ({ title }, { resetForm }) => {
    if (isEditMode) {
      dispatch(editColumn({ boardId, id, title, index }));
    } else {
      title = title === '' ? `Column ${index + 1}` : title;
      dispatch(addColumn({ boardId, title, index }));
    }
    resetForm();
    onCloseForm();
  };

  return (
    <ModalContent>
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
            <PrimaryButton type="submit" title={buttonText}>
              <IconAddEditDeleteModal icon={icon} />
            </PrimaryButton>
          </Form>
        )}
      </Formik>
    </ModalContent>
  );
};
