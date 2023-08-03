import React from 'react';
import { Field } from 'formik';
import styles from './NewBoard.module.css';

const BackgroundRadioButton = ({ name, value }) => {
  return (
    <label className={styles.customRadioBackground}>
      <Field
        type="radio"
        name={name}
        className={styles.visuallyHidden}
        value={value}
        required
      />
      <div
        className={`${styles.customRadio} ${styles.customBackground}`}
        style={{ backgroundColor: value }}
      />
    </label>
  );
};

export default BackgroundRadioButton;
