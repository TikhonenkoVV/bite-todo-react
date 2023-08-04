import React, { useState, useEffect, useRef, useDispatch } from 'react';
import { Formik, useFormik } from 'formik';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
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
} from './addTaskForm.styled';
import calendarIcon from './chevron-down.svg';

export const colors = ['#8FA1D0', '#E09CB5', '#BEDBB0', '#808080'];

const StyledCustomDatePicker = styled(DatePicker)`
  // // position: absolute;
  // top: 140px;
  // left: 0;
  // z-index: 9999;
  // background-color: red;
  // // border: 1px solid #ccc;
  // padding: 5px;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  // font-family: Poppins;
  // font-size: 14px;
  // color: #333;

  // .react-datepicker div {
  //   width: 200px;
  //   border: 10px solid #ccc;
  // }

  .react-datepicker__header {
    background-color: #8fa1d0;
    border: none;
  }

  .react-datepicker__day {
    padding: 18px;
  }

  // .react-datepicker__day--selected {
  //   background-color: #8fa1d0;
  //   color: #fff;
  // }

  // .react-datepicker__day--keyboard-selected {
  //   background-color: #8fa1d0;
  //   color: #fff;
  // }
`;

const initialValues = {
  title: '',
  description: '',
  color: '',
};

export const AddTasks = () => {
  const [color, setColor] = useState('');
  const [deadline, setDeadline] = useState('');

  // const dispatch = useDispatch();

  const deadlinePickerRef = useRef(null);

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

  const handleChange = event => {
    const { name, value } = event.target;

    if (name === 'color') {
      setColor(value);
    } else if (name === 'deadline') {
      setDeadline(value);
    }
  };

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
  });

  const handleDateChange = date => {
    if (date && date < new Date()) {
      alert('Deadline cannot be before today.');
      return;
    }
    formik.setFieldValue('deadline', date);
    setDeadline(date);
  };

  return (
    <StyledDiv>
      <StyledP>Add Card</StyledP>

      <form onSubmit={formik.handleSubmit}>
        <StyledInput
          type="text"
          name="title"
          placeholder="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
        />
        <StyledTextArea
          type="text"
          name="description"
          placeholder="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
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
          <StyledCustomDatePicker
            ref={deadlinePickerRef}
            name="deadline"
            selected={formik.values.deadline}
            onChange={handleDateChange}
            locale="en"
            dateFormat="d MMMM yyyy"
            placeholderText="Выберите дату дедлайна"
            customInput={<div></div>}
          />
        </StyledTitleDeadline>
        <StyledButton type="submit">Add</StyledButton>
      </form>
    </StyledDiv>
  );
};
