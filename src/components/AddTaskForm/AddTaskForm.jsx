import React, { useState, useEffect, useRef, useDispatch } from 'react';
import { Formik, useFormik } from 'formik';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as Yup from 'yup';
import sprite from '../../img/icons/sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';
import './AddTaskForm.css';
import {
  StyledP,
  StyledDiv,
  StyledInput,
  StyledTextArea,
  StyledButton,
  RadioGroup,
  RadioInput,
  RadioLabel,
  StyledTitelBtn,
  StyledTitleDeadline,
  Container,
  StyledFormikTitleNotification,
  StyledFormikDescriptionNotification,
  StyledBtnClose,
  PlusIconContainer,
  StyledFormikColorNotification,
} from './AddTaskForm.styled.js';
import calendarIcon from './chevron-down.svg';
// import { useModal } from 'hooks/useModal';
// import { Modal } from 'components/Modal';
// import Test from 'components/Test';

export const colors = ['#8FA1D0', '#E09CB5', '#BEDBB0', '#808080'];

const StyledCustomCalendar = styled(DatePicker)`
  &.custom-datepicker {
    .react-datepicker-wrapper & .react-datepicker__day--keyboard-selected,
    .react-datepicker-wrapper & .react-datepicker__day--today,
    .react-datepicker-wrapper & .react-datepicker__day--weekend {
      background-color: red !important;
      color: white !important;
    }

    .react-datepicker-wrapper & .react-datepicker__day--selected {
      background-color: red;
      color: white;
    }
  }
`;

const initialValues = {
  title: '',
  description: '',
  color: '',
};

export const AddTasks = ({ onClose, children }) => {
  const [color, setColor] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const dispatch = useDispatch();

  const deadlinePickerRef = useRef(null);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(3, 'Title must contain at least 3 characters')
      .max(50, 'Title must not exceed 50 characters'),
    description: Yup.string()
      .required('Description is required')
      .min(10, 'Description must contain at least 10 characters')
      .max(500, 'Description must not exceed 500 characters'),
    color: Yup.string().required('Please select a color'),
    deadline: Yup.date()
      .nullable()
      .required('Please select a deadline date')
      .min(new Date(), 'Deadline cannot be earlier than today'),
  });

  const handleDeadlineClick = () => {
    if (deadlinePickerRef.current) {
      deadlinePickerRef.current.setOpen(true);
    }
  };

  const CurrentDate = () => {
    const formattedDate = moment().format('MMMM D');
    return <div>Today, {formattedDate}</div>;
  };

  const formattedDeadline = deadline
    ? moment(deadline).format('D MMMM YYYY')
    : CurrentDate();

  // const handleChange = event => {
  //   const { name, value } = event.target;

  //   if (name === 'color') {
  //     setColor(value);
  //   } else if (name === 'deadline') {
  //     setDeadline(value);
  //   }
  // };

  const handleSubmit = (values, { resetForm }) => {
    if (!formik.values.deadline) {
      alert('Please select a deadline.');
      return;
    }
    console.log(values);
    resetForm();
    setDeadline('');
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const handleDateChange = date => {
    if (date && date < new Date()) {
      alert('Deadline cannot be before today.');
      return;
    }
    formik.setFieldValue('deadline', date);
    setDeadline(date);
  };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    // <>
    //   <button onClick={openModal}>Open MODAL</button>

    // {isModalOpen && (
    //   <div>
    //     <div></div>
    <StyledDiv>
      <StyledP>Add Card</StyledP>

      <StyledBtnClose onClick={closeModal}>
        <svg
          className="icon"
          width="18"
          height="18"
          aria-hidden="true"
          role="presentation"
          fill="white"
        >
          <use xlinkHref={`${sprite}#icon-x-close`} />
        </svg>
      </StyledBtnClose>
      <form onSubmit={formik.handleSubmit}>
        <StyledInput
          type="text"
          name="title"
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        {formik.touched.title && formik.errors.title ? (
          <StyledFormikTitleNotification>
            {formik.errors.title}
          </StyledFormikTitleNotification>
        ) : null}
        <StyledTextArea
          type="text"
          name="description"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
        {formik.touched.description && formik.errors.description ? (
          <StyledFormikDescriptionNotification>
            {formik.errors.description}
          </StyledFormikDescriptionNotification>
        ) : null}
        <StyledTitelBtn>Label color</StyledTitelBtn>
        <br />
        <RadioGroup>
          {colors.map((color, index) => (
            <RadioLabel key={index}>
              <RadioInput
                type="radio"
                name="color"
                value={color}
                checked={formik.values.color === color}
                onChange={formik.handleChange}
              />
            </RadioLabel>
          ))}
        </RadioGroup>
        {formik.touched.color && formik.errors.color ? (
          <StyledFormikColorNotification>
            {formik.errors.color}
          </StyledFormikColorNotification>
        ) : null}

        <StyledTitleDeadline>
          Deadline
          <Container>
            {formattedDeadline}
            <img
              src={calendarIcon}
              alt="Calendar Icon"
              onClick={handleDeadlineClick}
              style={{
                marginLeft: '5px',
                cursor: 'pointer',
              }}
            />
          </Container>
          <StyledCustomCalendar
            className="custom-datepicker"
            ref={deadlinePickerRef}
            name="deadline"
            selected={formik.values.deadline}
            onChange={handleDateChange}
            locale="en"
            dateFormat="d MMMM yyyy"
            // placeholderText="Выберите дату дедлайна"
            customInput={<div></div>}
          />
        </StyledTitleDeadline>
        <StyledButton type="submit">
          <PlusIconContainer>
            <svg
              className="icon"
              width="14"
              height="14"
              aria-hidden="true"
              role="presentation"
              fill="white"
            >
              <use xlinkHref={`${sprite}#icon-plus`} />
            </svg>
          </PlusIconContainer>
          Add
        </StyledButton>
      </form>
    </StyledDiv>
    //   <div>{children}</div>
    // </div>
    // )}
    // </>
  );
};
