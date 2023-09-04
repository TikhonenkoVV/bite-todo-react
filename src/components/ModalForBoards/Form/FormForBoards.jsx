import * as Yup from 'yup';
import PropTypes from 'prop-types';
import {
  FormInput,
  Text,
  RadioIconBox,
  RadioBackgroundBox,
  Error,
} from './FormForBoards.styled';
import IconRadioButton from './IconRadioButton';
import BackgroundRadioButton from './BackgroundRadioButton';
import { Formik, Form } from 'formik';
import { edit, add } from 'store/boards/operations';

import { useDispatch, useSelector } from 'react-redux';

import { selectBoardsState } from 'store/boards/selectors';
import { PrimaryButton } from 'components/miniComponents/PrimaryButton/PrimaryButton';
import { IconAddEditDeleteModal } from 'components/miniComponents/IconAddEditDeleteModal/IconAddEditDeleteModal';


const iconNames = [
  'Project',
  'star',
  'loading',
  'puzzle',
  'container',
  'lightning',
  'colors',
  'hexagon',
];

const backgroundImages = [
  'default',
  'flowers',
  'stars',
  'sakura',
  'night',
  'fern',
  'clouds',
  'rock',
  'circle',
  'moon',
  'yacht',
  'balloon',
  'canyon',
  'coast',
  'balloons',
  'aurora',
];

const FormForBoards = ({ boardId, type, onClick }) => {
  const dispatch = useDispatch();

  const { boards } = useSelector(selectBoardsState);

  const board = boards.find(board => board._id === boardId);
  const buttonText = type === 'edit' ? 'Edit' : 'Create';
  const icon = type === 'edit' ? 'pencil' : 'plus';
  let boardNumber = 1;

  const editBoardNumber = () => {
    if (boards.find(board => board.title.includes(`Board ${boardNumber}`))) {
      boardNumber += 1;
      editBoardNumber();
    }
    return boardNumber;
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Must be not less than 2 characters')
      .max(32, 'Must be 32 characters or less'),
    background: Yup.string().required('A background must be selected'),
    dashboardIcon: Yup.string().required('An icon must be selected'),
  });

  return (
    <Formik
      initialValues={{
        ...(boardId ? { id: boardId } : {}),
        title: board?.title ? board.title : ``,
        background: board?.background ? board.background : 'default',
        dashboardIcon: board?.dashboardIcon ? board.dashboardIcon : 'Project',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, formik) => {
        if (
          boards.find(board => board.title === values.title) &&
          type !== 'edit'
        ) {
          formik.setFieldError(
            'title',
            'A board with this title already exists'
          );
          return;
        }
        if (values.title === '') {
          values.title = `Board ${editBoardNumber()}`;
        }
        type === 'edit' ? dispatch(edit(values)) : dispatch(add(values));
        boardNumber = 1;
        onClick();
      }}
    >
      {formik => (
        <Form>
          <FormInput
            id="title"
            name="title"
            placeholder={`Board ${editBoardNumber()}`}
            value={formik.values.title}
          />
          {formik.errors.title && formik.touched.title && (
            <Error>{formik.errors.title}</Error>
          )}
          <Text>Icons</Text>
          <RadioIconBox>
            {iconNames.map(iconName => (
              <IconRadioButton
                key={iconName}
                name="dashboardIcon"
                value={iconName}
                checked={formik.values.dashboardIcon === iconName}
              />
            ))}
          </RadioIconBox>
          {formik.errors.dashboardIcon && formik.touched.dashboardIcon && (
            <Error>{formik.errors.dashboardIcon}</Error>
          )}
          <Text>Background</Text>
          <RadioBackgroundBox>
            {backgroundImages.map(image => (
              <BackgroundRadioButton
                key={image}
                name="background"
                value={image}
                checked={formik.values.background === image}
              />
            ))}
          </RadioBackgroundBox>
          {formik.errors.background && formik.touched.background && (
            <Error>{formik.errors.background}</Error>
          )}
          <PrimaryButton title={buttonText}>
            <IconAddEditDeleteModal icon={icon} />
          </PrimaryButton>
        </Form>
      )}
    </Formik>
  );
};

FormForBoards.propTypes = {
  onClick: PropTypes.func.isRequired,
  boardId: PropTypes.string,
  type: PropTypes.oneOf(['new', 'edit']).isRequired,
};

export default FormForBoards;
