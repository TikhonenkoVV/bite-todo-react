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
  CloseButton,
  ButtonBox,
  SvgBox,
  ButtonText,
  Error,
} from './NewBoard.styled';
import icons from '../../img/icons/sprite.svg';
import { Svg } from '../SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { add } from 'store/boards/operations';
import { selectBoardsState } from 'store/boards/selectors';
import { PrimaryButton } from 'components/PrimaryButton';

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

const NewBoard = ({ onClick }) => {
  const dispatch = useDispatch();

  const { boards } = useSelector(selectBoardsState);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(2, 'Must be not less than 2 characters')
      .max(32, 'Must be 32 characters or less'),
    background: Yup.string().required('A background must be selected'),
    dashboardIcon: Yup.string().required('An icon must be selected'),
  });

  return (
    <Formik
      initialValues={{
        title: '',
        background: null,
        dashboardIcon: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values, formik) => {
        if (boards.find(board => board.title === values.title)) {
          formik.setFieldError(
            'title',
            'A board with this title already exists'
          );
          return;
        }
        dispatch(add(values));
        onClick();
      }}
    >
      {formik => (
        <Form>
          <FormBox>
            <CloseButton type="button" onClick={onClick}>
              <Svg w={18} h={18} use={`${icons}#icon-x-close`} />
            </CloseButton>
            <Title>New board</Title>
            <FormInput
              type="text"
              id="title"
              name="title"
              placeholder="Title"
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
            <PrimaryButton type="submit">
              <ButtonBox>
                <SvgBox>
                  <Svg w={14} h={14} use={`${icons}#icon-plus`} />
                </SvgBox>
                <ButtonText>Create </ButtonText>
              </ButtonBox>
            </PrimaryButton>
          </FormBox>
        </Form>
      )}
    </Formik>
  );
};

NewBoard.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default NewBoard;
