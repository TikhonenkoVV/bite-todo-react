import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'react-toastify/dist/ReactToastify.css';
import IconRadioButton from './IconRadioButton';
import BackgroundRadioButton from './BackgroundRadioButton';
import {
  Title,
  FormBox,
  FormInput,
  Text,
  RadioIconBox,
  RadioBackgroundBox,
  ButtonBox,
  SvgBox,
  ButtonText,
  Error,
  ModalBoardButton,
} from './NewBoard.styled';
import icons from '../../img/icons/sprite.svg';
import { Svg } from '../SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { edit, add } from 'store/boards/operations';
import { selectBoardsState } from 'store/boards/selectors';
import { ButtonCloseModal } from 'components/ButtonCloseModal/ButtonCloseModal';

const iconNames = [
  'icon-Project',
  'icon-star',
  'icon-loading',
  'icon-puzzle',
  'icon-container',
  'icon-lightning',
  'icon-colors',
  'icon-hexagon',
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

const MoodalForBoards = ({ onClick, boardId, type }) => {
  const dispatch = useDispatch();

  const { boards } = useSelector(selectBoardsState);

  const board = boards.find(board => board._id === boardId);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Must be not less than 2 characters')
      .max(32, 'Must be 32 characters or less'),
    background: Yup.string().required('A background must be selected'),
    dashboardIcon: Yup.string().required('An icon must be selected'),
  });

  return (
    <FormBox>
      <ButtonCloseModal onClose={onClick} />
      <Title>{type === 'edit' ? 'Edit board' : 'New board'}</Title>
      <Formik
        initialValues={{
          ...(boardId ? { id: boardId } : {}),
          title: board?.title ? board.title : ``,
          background: board?.background ? board.background : 'default',
          dashboardIcon: board?.dashboardIcon
            ? board.dashboardIcon
            : 'icon-Project',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, formik) => {
          if (
            boards.find(
              b => b.title === values.title && board.title !== values.title
            )
          ) {
            formik.setFieldError(
              'title',
              'A board with this title already exists'
            );
            return;
          }
          if (values.title === '') {
            values.title = `Board ${boards.length +1}`;
          }
          type === 'edit' ? dispatch(edit(values)) : dispatch(add(values));

          console.log(values);
          onClick();
        }}
      >
        {formik => (
          <Form>
            <FormInput
              id="title"
              name="title"
              placeholder={`Board ${boards.length +1}`}
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
            <ModalBoardButton type="submit">
              <ButtonBox>
                <SvgBox>
                  <Svg
                    w={14}
                    h={14}
                    use={`${icons}${
                      type === 'edit' ? '#icon-pencil' : '#icon-plus'
                    }`}
                  />
                </SvgBox>
                <ButtonText>{type === 'edit' ? 'Edit' : 'Create'}</ButtonText>
              </ButtonBox>
            </ModalBoardButton>
          </Form>
        )}
      </Formik>
    </FormBox>
  );
};

MoodalForBoards.propTypes = {
  onClick: PropTypes.func.isRequired,
  boardId: PropTypes.string,
  type: PropTypes.oneOf(['new', 'edit']).isRequired,
};

export default MoodalForBoards;
