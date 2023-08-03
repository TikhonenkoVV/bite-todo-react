import React, { useState } from 'react';
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
} from './NewBoard.styled';

const iconNames = ['square', 'circle', 'rectangle'];

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
          <FormBox>
            <Title>New board</Title>

            <FormInput id="title" name="title" placeholder="Title" />

            <Text>Icons</Text>
            <RadioIconBox>
              {iconNames.map(iconName => (
                <IconRadioButton key={iconName} name="icon" value={iconName} />
              ))}
            </RadioIconBox>

            <Text>Background</Text>
            <RadioBackgroundBox>
              {backgroundImages.map(image => (
                <BackgroundRadioButton
                  key={image}
                  name="background"
                  value={image}
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

export default NewBoard;
