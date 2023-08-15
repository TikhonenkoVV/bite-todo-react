import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as Yup from 'yup';
import sprite from '../../img/icons/sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';
import './AddTaskForm.css';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/columns/operations';
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
  DatePickerContainer,
  StyledContainerCardHeder,
} from './AddTaskForm.styled';

export const colors = ['#8FA1D0', '#E09CB5', '#BEDBB0', '#808080'];
const priorities = ['low', 'medium', 'high', 'without'];

const initialValues = {
  title: '',
  description: '',
  priority: '',
};

export const AddTasks = ({ boardId, columnId, closeModal, taskId }) => {
  const [deadline, setDeadline] = useState(new Date());
  const [showDateNotification, setShowDateNotification] = useState(true);
  const dispatch = useDispatch();
  const deadlinePickerRef = useRef(null);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .required('Title is required')
      .min(1, 'Title must contain at least 3 characters')
      .max(32, 'Title must not exceed 50 characters'),
    description: Yup.string()
      .required('Description is required')
      .min(1, 'Description must contain at least 10 characters')
      .max(500, 'Description must not exceed 500 characters'),
    priority: Yup.string().required('Please select a color'),
    deadline: Yup.date()
      .nullable()
      .required('Please select a deadline date')
      .min(new Date(), 'Deadline cannot be earlier than today')
      .test('future', 'Please select a future date', value => {
        const currentDate = new Date();
        return value && value > currentDate;
      }),
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

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setDeadline(values.deadline);
      await dispatch(addTask({ ...values, boardId, columnId, taskId }));
      resetForm();
      setDeadline('');
      closeModal();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleDateChange = date => {
    if (date && date < new Date()) {
      alert('Deadline cannot be before today.');
      return;
    }
    if (date !== new Date()) {
      setShowDateNotification(false);
    }
    formik.setFieldValue('deadline', date);
    setDeadline(date);
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  return (
    <StyledDiv>
      <StyledContainerCardHeder>
        <StyledP>Add Card</StyledP>

        <StyledBtnClose onClick={closeModal}>
          <svg
            className="icon"
            width="18"
            height="18"
            aria-hidden="true"
            role="presentation"
          >
            <use xlinkHref={`${sprite}#icon-x-close`} />
          </svg>
        </StyledBtnClose>
      </StyledContainerCardHeder>

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
          {priorities.map((priority, index) => (
            <RadioLabel key={index}>
              <RadioInput
                type="radio"
                name="priority"
                color={colors[index]}
                value={priority}
                checked={formik.values.priority === priority}
                onChange={formik.handleChange}
              />
            </RadioLabel>
          ))}
        </RadioGroup>
        {formik.touched.priority && formik.errors.priority ? (
          <StyledFormikColorNotification>
            {formik.errors.priority}
          </StyledFormikColorNotification>
        ) : null}

        <StyledTitleDeadline>
          Deadline
          <Container>
            {formattedDeadline}
            <svg
              className="icon"
              width="14"
              height="14"
              aria-hidden="true"
              role="presentation"
              fill="#BEDBB0"
              onClick={handleDeadlineClick}
              style={{
                marginLeft: '5px',
                cursor: 'pointer',
              }}
            >
              <use xlinkHref={`${sprite}#icon-chevron-down`} />
            </svg>
            {showDateNotification && (
              <p style={{ marginLeft: 16 }}>Please select date</p>
            )}
          </Container>
          {formik.touched.deadline && formik.errors.deadline ? (
            <div>{formik.errors.deadline}</div>
          ) : null}
          <DatePickerContainer>
            <DatePicker
              className="custom-datepicker"
              ref={deadlinePickerRef}
              name="deadline"
              selected={deadline || undefined}
              onChange={handleDateChange}
              locale="en"
              dateFormat="d MMMM yyyy"
              showTimeSelect={false}
              customInput={<div></div>}
            />
          </DatePickerContainer>
        </StyledTitleDeadline>
        <StyledButton type="submit">
          <PlusIconContainer>
            <svg
              className="icon"
              width="14"
              height="14"
              aria-hidden="true"
              role="presentation"
            >
              <use xlinkHref={`${sprite}#icon-plus`} />
            </svg>
          </PlusIconContainer>
          Add
        </StyledButton>
      </form>
    </StyledDiv>
  );
};
