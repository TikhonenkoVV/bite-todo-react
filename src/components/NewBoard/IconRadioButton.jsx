import React from 'react';
import { Field } from 'formik';
import styles from './NewBoard.module.css';

const IconRadioButton = ({ name, value }) => {
  return (
    <label className={styles.customRadioIcon}>
      <Field
        type="radio"
        name={name}
        value={value}
        className={styles.visuallyHidden}
        required
      />
      <span className={styles.icon}>{value}</span>
    </label>
  );
};

export default IconRadioButton;
