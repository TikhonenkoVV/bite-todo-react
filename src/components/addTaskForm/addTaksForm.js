import React, { useState, useEffect, useRef } from 'react';
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
} from './addTaskForm.styled';
import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

export const colors = ['#8FA1D0', '#E09CB5', '#BEDBB0', '#808080'];

const Container = styled.div`
  color: blue;
  text-decoration: underline;
  cursor: pointer;
`;

const StyledDatePicker = styled(DatePicker)`
  .react-datepicker {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 14px;
    color: #333;
    position: relative;
  }

  .react-datepicker__input {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
  }
`;

export const AddTasks = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [deadline, setDeadline] = useState('');

  const deadlinePickerRef = useRef(null);

  const handleDeadlineClick = () => {
    if (deadlinePickerRef.current) {
      deadlinePickerRef.current.setOpen(true);
    }
  };

  useEffect(() => {
    if (deadlinePickerRef.current) {
      deadlinePickerRef.current.setOpen(false);
    }
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      title,
      description,
      selectedColor,
      deadline,
    };

    console.log(formData);

    setTitle('');
    setDescription('');
    setSelectedColor('');
    setDeadline('');
  };

  const handleColorChange = color => {
    setSelectedColor(color);
  };

  return (
    <StyledDiv>
      <StyledP>Add Card</StyledP>
      <form>
        <StyledInput
          id="title"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <StyledTextArea
          id="description"
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <StyledTitelBtn>Label color</StyledTitelBtn>
        <br />
        <RadioGroup>
          {' '}
          {colors.map((color, index) => (
            <RadioLabel key={index}>
              <RadioInput
                type="radio"
                name="color"
                value={color}
                checked={selectedColor === color}
                onChange={() => handleColorChange(color)}
                color={color}
              />
            </RadioLabel>
          ))}
        </RadioGroup>

        <StyledTitleDeadline>
          Deadline
          <Container onClick={handleDeadlineClick}>
            {moment().format('D MMMM YYYY')}
          </Container>
          <StyledDatePicker
            ref={deadlinePickerRef} // Используйте ref для компонента DatePicker
            selected={deadline}
            onChange={date => setDeadline(date)}
            locale="en"
            dateFormat="d MMMM yyyy"
            placeholderText="Выберите дату дедлайна"
            // defaultValue={moment().format()}
            // customInput={DatePickerInput}
          />
        </StyledTitleDeadline>
        <StyledButton type="submit" onClick={handleSubmit}>
          Add{' '}
        </StyledButton>
      </form>
    </StyledDiv>
  );
};
