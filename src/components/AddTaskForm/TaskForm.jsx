import React, { useState, useRef } from 'react';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import * as Yup from 'yup';
import sprite from '../../img/icons/sprite.svg';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';
import {
  StyledP,
  StyledInput,
  StyledTextArea,
  RadioGroup,
  RadioInput,
  RadioLabel,
  StyledTitelBtn,
  StyledTitleDeadline,
  Container,
  StyledFormikTitleNotification,
  StyledFormikDescriptionNotification,
  StyledFormikColorNotification,
  DatePickerContainer,
  DatePickerBtn,
} from './AddTaskForm.styled';
import { PrimaryButton } from 'components/miniComponents/PrimaryButton/PrimaryButton';
import { IconAddEditDeleteModal } from 'components/miniComponents/IconAddEditDeleteModal/IconAddEditDeleteModal';
import { ModalContent } from 'components/Modal/Modal.styled';
import { ButtonIcon } from 'components/miniComponents/ButtonIcon/ButtonIcon';

export const colors = ['#8FA1D0', '#E09CB5', '#BEDBB0', '#808080'];
const priorities = ['low', 'medium', 'high', 'without'];

export const TaskForm = ({
  title: initialTitle = '',
  description: initialDescription = '',
  priority: initialPriority = 'without',
  deadline: initialDeadline,
  onSubmit,
  onClose,
  isEditing = false,
  cardsNumber,
}) => {
  const startDate = new Date();
  startDate.setDate(startDate.getDate() + 1);

  const initialValues = {
    title: initialTitle,
    description: initialDescription,
    priority: initialPriority,
    deadline: initialDeadline >= startDate ? initialDeadline : startDate,
  };

  const [deadline, setDeadline] = useState(startDate);

  const deadlinePickerRef = useRef(null);

  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .min(1, 'Title must contain at least 3 characters')
      .max(32, 'Title must not exceed 50 characters'),
    description: Yup.string()
      .required('description is Required')
      .min(1, 'Description must contain at least 10 characters')
      .max(500, 'Description must not exceed 500 characters'),
    priority: Yup.string().required('Please select a color'),
    deadline: Yup.date(),
  });

  const handleDeadlineClick = () => {
    if (deadlinePickerRef.current) {
      deadlinePickerRef.current.setOpen(true);
    }
  };

  const CurrentDate = () => {
    const formattedDate = moment(deadline).format('D MMMM D');
    return <div> {formattedDate}</div>;
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      values.title =
        values.title === '' ? `Task ${cardsNumber + 1}` : values.title;

      await onSubmit(values);
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
    validationSchema: validationSchema,
  });

  const handleDateChange = date => {
    formik.setFieldValue('deadline', date);
    setDeadline(date);
  };

  const formattedDeadline = formik.values.deadline
    ? moment(formik.values.deadline).format('D MMMM YYYY')
    : CurrentDate();

  const updateDeadline = deadline ? new Date(deadline) : null;

  return (
    <ModalContent>
      <StyledP>{isEditing ? 'Edit Card' : 'Add Card'}</StyledP>
      <ButtonIcon
        ariaLabel="close"
        action={onClose}
        style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
        }}
      />
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
                priority={priority}
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

        <StyledTitleDeadline
          className={formik.values.priority === 'without' ? 'disabled' : ''}
        >
          Deadline
          <Container
            className={formik.values.priority === 'without' ? 'disabled' : ''}
          >
            {formattedDeadline}
            <DatePickerBtn
              type="button"
              disabled={formik.values.priority === 'without'}
              onClick={handleDeadlineClick}
            >
              <svg
                className="icon"
                width="14"
                height="14"
                aria-hidden="true"
                role="presentation"
                style={{
                  marginLeft: '5px',
                  fill: 'currentColor',
                }}
              >
                <use xlinkHref={`${sprite}#icon-chevron-down`} />
              </svg>
            </DatePickerBtn>
          </Container>
          {formik.touched.deadline && formik.errors.deadline ? (
            <div>{formik.errors.deadline}</div>
          ) : null}
          <DatePickerContainer>
            <DatePicker
              className="custom-datepicker"
              ref={deadlinePickerRef}
              name="deadline"
              selected={updateDeadline}
              onChange={handleDateChange}
              locale="en"
              dateFormat="d MMMM yyyy"
              showTimeSelect={false}
              customInput={<div></div>}
              minDate={startDate}
            />
          </DatePickerContainer>
        </StyledTitleDeadline>
        <PrimaryButton title={isEditing ? 'Edit' : 'Add'}>
          <IconAddEditDeleteModal icon={isEditing ? 'pencil' : 'plus'} />
        </PrimaryButton>
      </form>
    </ModalContent>
  );
};

TaskForm.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  priority: PropTypes.string,
  deadline: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
};
