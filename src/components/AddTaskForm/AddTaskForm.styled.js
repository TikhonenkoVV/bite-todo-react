import styled from '@emotion/styled';

import { devices } from 'styles';

export const StyledDiv = styled.div`
  position: relative;
  width: 350px;
  height: 522px;
  background-color: ${props => props.theme.colors.background};
  margin-left: -4px;
  border-radius: 10px;

  @media screen and (${devices.notdesktop}) {
    width: 335px;
    height: 522px;
  }
`;

export const StyledBtnClose = styled.button`
  width: 18px;
  height: 18px;
  margin-left: 180px;
  fill: ${props => props.theme.colors.closeModalBtn};

  @media screen and (${devices.desktop}) {
    margin-left: 200px;
  }

  @media screen and (${devices.notdesktop}) {
    margin-left: 180px;
  }
`;

export const StyledContainerCardHeder = styled.div`
  display: flex;
`;

export const StyledP = styled.p`
  display: inline-block;
  color: ${props => props.theme.colors.cardMajorText};
  font-size: 18px;
  margin-bottom: 24px;
  margin-top: 24px;
  margin-left: 24px;
`;

export const StyledInput = styled.input`
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.btnAddBoard};
  opacity: 0.4;
  background: ${props => props.theme.colors.card};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  margin-bottom: 10px;
  margin-left: 20px;
  padding: 14px 115px 14px 18px;
  font-size: 14px;
  border-radius: 4px;
  color: ${props => props.theme.colors.cardMajorText};
  :focus-visible {
    border: 1px solid ${props => props.theme.colors.btnAddBoard};
    outline: none;
  }

  @media screen and (${devices.notdesktop}) {
    display: inline-flex;
    padding: 14px 101px 14px 18px;
    align-items: center;
    border-radius: 8px;
    border: 1px solid #bedbb0;
    box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  }
`;

export const StyledTextArea = styled.textarea`
  resize: none;

  max-width: 100%;
  font-size: 14px;
  margin-left: 20px;
  color: ${props => props.theme.colors.cardMajorText};
  padding: 14px 132px 122px 15px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.btnAddBoard};
  opacity: 0.4;
  background: ${props => props.theme.colors.card};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  margin-bottom: 24px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  :focus {
    border-color: ${props => props.theme.colors.btnAddBoard};
  }

  @media screen and (${devices.mobile}) {
    padding: 14px 134px 122px 15px;
  }

  @media screen and (${devices.tablet}) {
    padding: 14px 124px 122px 15px;
  }

  @media screen and (${devices.desktop}) {
    padding: 14px;
    width: 311px;
    height: 154px;
  }
`;

export const StyledTitelBtn = styled.label`
  color: ${props => props.theme.colors.cardMinorText};
  font-size: 12px;
  margin-left: 24px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  width: 302px;
  padding: 10px 0px 11px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.theme.colors.btnAddBoard};

  @media screen and (${devices.notdesktop}) {
    width: 287px;
  }
`;

export const Container = styled.div`
  color: ${props => props.theme.colors.btnAddBoard};
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: ${props => props.theme.colors.btnAddBoard};
  /* margin-left: 24px; */
  justify-content: left;
  align-items: center;
  display: flex;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 10px;
`;

export const RadioInput = styled.input`
  margin-bottom: 14px;

  &::before {
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: ${({ checked }) => (checked ? '10px' : '14px')};
    height: ${({ checked }) => (checked ? '10px' : '14px')};
    border: ${({ checked, colors }) => (checked ? '1px' : '0px')} solid
      ${({ colors }) => colors};
    background-color: ${({ checked, color }) => (checked ? color : color)};
    transition: width 0.2s ease, height 0.2s ease;
  }
  &:checked::before {
    margin-bottom: 3.2px;
    margin-left: 1.5px;
    background-color: ${({ checked, color }) => (checked ? color : color)};
  }
`;

export const PlusIconContainer = styled.div`
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px;
  background-color: ${props => props.theme.colors.card};
  border-radius: 20%;
  fill: ${props => props.theme.colors.plusButtonColor};
`;

export const StyledTitleDeadline = styled.div`
  color: ${props => props.theme.colors.cardMinorText};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-left: 24px;
`;

export const StyledFormikTitleNotification = styled.div`
  margin-left: 24px;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.btnAddColumn};
  font-size: 12px;
`;

export const StyledFormikDescriptionNotification = styled.div`
  margin-top: -15px;
  margin-left: 24px;
  color: ${props => props.theme.colors.btnAddColumn};
  font-size: 12px;
`;

export const StyledFormikColorNotification = styled.div`
  margin-top: -5px;
  margin-left: 24px;
  color: ${props => props.theme.colors.btnAddColumn};
  font-size: 12px;
`;

export const DatePickerContainer = styled.div`
  .react-datepicker {
    border-radius: 8px;
    border: 1px solid #bedbb0;
    background: ${props => props.theme.colors.calendarBackGround};
  }

  .react-datepicker-popper {
    margin-left: 130px;
    margin-top: -25px;
  }

  .react-datepicker__header {
    background-color: ${props => props.theme.colors.calendarBackGround};
  }

  .react-datepicker__current-month {
    color: ${props => props.theme.colors.calendarNumberColor};
  }

  .react-datepicker__day-name {
    color: ${props => props.theme.colors.calendarNumberColor};
  }

  .react-datepicker__day {
    color: ${props => props.theme.colors.calendarNumberColor};
    cursor: pointer;
    transition: background-color 0.2s ease;
    border-radius: 50%;

    &:active,
    &:hover {
      background-color: ${props => props.theme.colors.calendarSelectedColor};
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: ${props => props.theme.colors.btnAddBoard};
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--today.react-datepicker__day--selected {
    background-color: ${props => props.theme.colors.calendarSelectedColor};
  }

  .react-datepicker__day--today:not(.react-datepicker__day--selected):hover {
    background-color: ${props => props.theme.colors.calendarSelectedColor};
    color: black;
  }

  .react-datepicker__day--selected:hover {
    background-color: ${props => props.theme.colors.calendarSelectedColor};
  }
`;
