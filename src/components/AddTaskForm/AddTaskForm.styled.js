import styled from '@emotion/styled';

export const StyledContainerCardHeder = styled.div`
  display: flex;
`;

export const StyledP = styled.p`
  display: inline-block;
  color: ${props => props.theme.colors.cardMajorText};
  font-size: 18px;
  margin-bottom: 24px;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.colors.btnAddBoard};
  border-radius: 8px;
  opacity: 0.4;
  background: ${props => props.theme.colors.card};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  margin-bottom: 14px;
  outline: none;
  padding: 14px 18px;
  font-size: 14px;
  color: ${props => props.theme.colors.cardMajorText};
  :focus-visible {
    opacity: 1;
  }
`;

export const StyledTextArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 154px;
  font-size: 14px;
  color: ${props => props.theme.colors.cardMajorText};
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.btnAddBoard};
  opacity: 0.4;
  background: ${props => props.theme.colors.card};
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  margin-bottom: 24px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  :focus {
    opacity: 1;
  }
`;

export const StyledTitelBtn = styled.label`
  color: ${props => props.theme.colors.cardMinorText};
  font-size: 12px;
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
  justify-content: left;
  align-items: center;
  display: flex;
  &.disabled {
    color: ${props => props.theme.colors.cardMinorText};
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 10px;
  cursor: pointer;
  margin-top: 10px;
`;

export const RadioInput = styled.input`
  position: relative;
  margin-bottom: 14px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => props.theme.priority[props.priority]};
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 1px;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: ${props => props.theme.colors.filterDecorativeElement};
    background-color: ${props => props.theme.priority[props.priority]};
    opacity: ${props => (props.checked ? '1' : ' 0')};
  }
`;

export const StyledTitleDeadline = styled.div`
  color: ${props => props.theme.colors.cardMinorText};
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  &.disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

export const StyledFormikTitleNotification = styled.div`
  margin-bottom: 5px;
  color: ${props => props.theme.colors.btnAddColumn};
  font-size: 12px;
`;

export const StyledFormikDescriptionNotification = styled.div`
  margin-top: -15px;
  color: #ed4337;
  font-size: 12px;
`;

export const StyledFormikColorNotification = styled.div`
  margin-top: -5px;
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

  .react-datepicker__day--disabled {
    opacity: 0.3;
  }
`;

export const DatePickerBtn = styled.button`
  color: ${props => props.theme.colors.btnAddBoard};
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
