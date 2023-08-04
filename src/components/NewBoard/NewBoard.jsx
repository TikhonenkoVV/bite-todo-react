import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
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
} from './NewBoard.styled';
import icons from '../../img/icons/sprite.svg';
import { Svg } from '../SvgIcon/SvgIcon';

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
  const scheme = 'violet';
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    icon: Yup.string().required('An icon must be selected'),
    background: Yup.string().required('A background must be selected'),
  });

  return (
    <Formik
      initialValues={{
        icon: null,
        title: '',
        background: null,
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
        onClick();
      }}
    >
      {formik => (
        <Form>
          <FormBox scheme={scheme}>
            <CloseButton type="button" onClick={onClick}>
              <Svg w={18} h={18} use={`${icons}#icon-x-close`} />
            </CloseButton>
            <Title scheme={scheme}>New board</Title>

            <FormInput
              id="title"
              name="title"
              placeholder="Title"
              scheme={scheme}
            />

            <Text scheme={scheme}>Icons</Text>
            <RadioIconBox>
              {iconNames.map(iconName => (
                <IconRadioButton
                  key={iconName}
                  name="icon"
                  value={iconName}
                  checked={formik.values.icon === iconName}
                  scheme={scheme}
                />
              ))}
            </RadioIconBox>

            <Text scheme={scheme}>Background</Text>
            <RadioBackgroundBox>
              {backgroundImages.map(image => (
                <BackgroundRadioButton
                  key={image}
                  name="background"
                  value={image}
                  checked={formik.values.background === image}
                  scheme={scheme}
                />
              ))}
            </RadioBackgroundBox>

            <button
              type="submit"
              onClick={() => {
                if (Object.keys(formik.errors).length > 0) {
                  toast.error('Please fill out all the fields', {
                    position: 'top-center',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
              }}
            >
              Create
            </button>

            <ToastContainer
              position="top-center"
              autoClose={2000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
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
