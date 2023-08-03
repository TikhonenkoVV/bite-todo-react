import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './NewBoard.module.css';

const iconNames = ['square', 'circle', 'rectangle'];
const backgroundColors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF'];

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
        <Form>
          <div>
            <label>
              <Field type="text" name="title" placeholder="Title" />
            </label>
          </div>

          <p>Icons</p>
          <div className={styles.radioBox}>
            {iconNames.map(iconName => (
              <label key={iconName} className={styles.customRadioIcon}>
                <Field
                  type="radio"
                  name="icon"
                  value={iconName}
                  className={styles.visuallyHidden}
                  required
                />
                <span className={styles.icon}>{iconName}</span>
              </label>
            ))}
          </div>

          <p>Background</p>
          <div className={styles.radioBox}>
            {backgroundColors.map((color, index) => (
              <label key={index} className={styles.customRadioBackground}>
                <Field
                  type="radio"
                  name="background"
                  className={styles.visuallyHidden}
                  value={color}
                  required
                />
                <div
                  className={`${styles.customRadio} ${styles.customBackground}`}
                  style={{ backgroundColor: color }}
                />
              </label>
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
