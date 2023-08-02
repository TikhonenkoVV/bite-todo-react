import React from 'react';
import { Formik, Form, Field } from 'formik';
// import icons from './icons'; 
import styles from './NewBoard.module.css'; 

const iconNames = ['square', 'circle', 'rectangle'];
const backgroundColors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF'];

const NewBoard = () => {
  return (
    <Formik
      initialValues={{ icon: '', title: '', background: backgroundColors[0] }} 
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
        <div>
          <label>
            <Field type="text" name="title" placeholder="Тайтл" required /> 
          </label>
        </div>
        <div>
          <span>Icons</span>
          {iconNames.map((iconName) => (
            <label key={iconName}>
              <Field type="radio" name="icon" value={iconName} required /> 
              <div className={styles.customRadio}>
                {/* {icons[iconName]} */}
                `${iconName}`
              </div>
            </label>
          ))}
        </div>
        <div>
          <span>Background</span>
          {backgroundColors.map((color, index) => (
            <label key={index}>
              <Field type="radio" name="background" value={color} defaultChecked={index === 0} />
              <div className={`${styles.customRadio} ${styles.customBackground}`} style={{ backgroundColor: color }} />
            </label>
          ))}
        </div>
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};

export default NewBoard;
