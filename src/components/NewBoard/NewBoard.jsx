import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './NewBoard.module.css';
import IconRadioButton from './IconRadioButton';
import BackgroundRadioButton from './BackgroundRadioButton';

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

const NewBoard = () => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    icon: Yup.string().required('An icon must be selected'),
    background: Yup.string().required('A background must be selected'),
  });

  return (
    <Formik
      initialValues={{
        icon: '',
        title: '',
        background: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {formik => (
        <Form className={styles.form}>
          <h2>New board</h2>
          <div>
            <label>
              <Field type="text" name="title" placeholder="Title" />
            </label>
          </div>

          <p>Icons</p>
          <div className={styles.radioBox}>
            {iconNames.map(iconName => (
              <IconRadioButton key={iconName} name="icon" value={iconName} />
            ))}
          </div>

          <p>Background</p>
          <div className={styles.radioBox}>
            {backgroundImages.map((image) => (
              <BackgroundRadioButton
                key={image}
                name="background"
                value={image}
              />
            ))}
          </div>

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
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Form>
      )}
    </Formik>
  );
};

export default NewBoard;
