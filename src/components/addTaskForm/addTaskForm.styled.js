import styled from '@emotion/styled';
import { colors } from './addTaksForm';

export const StyledDiv = styled.div`
  width: 350px;
  height: 550px;
  background-color: #151515;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
`;

export const StyledP = styled.p`
  display: inline-block;

  color: #ffffff;
  font-size: 18px;
  margin-bottom: 24px;

  margin-top: 24px;
  margin-left: 24px;
`;

export const StyledInput = styled.input`
  margin-bottom: 10px;
  margin-left: 20px;
  width: 300px;
  height: 49px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ffffff;
  background-color: #1f1f1f;
  &:focus {
    border: 1px solid #a4a4a4;
  }
`;

export const StyledTextArea = styled.textarea`
  margin-bottom: 10px;
  margin-left: 20px;
  width: 300px;
  height: 154px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ffffff;
  background-color: #1f1f1f;
`;

export const StyledTitelBtn = styled.label`
  color: rgba(255, 255, 255, 50%);
  font-size: 12px;
  margin-left: 24px;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  width: 302px;
  height: 49px;
  margin-left: 20px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 100px;
  &:hover {
    background-color: #45a049;
  }
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
  background-color: colors;

  &::before {
    content: '';
    display: inline-block;
    border-radius: 50%;

    width: ${({ checked }) => (checked ? '6px' : '14px')};
    height: ${({ checked }) => (checked ? '6px' : '14px')};

    border: ${({ checked }) =>
      checked ? `3px solid ${colors}` : `0px solid ${colors}`};
    background-color: ${({ checked, color }) => (checked ? color : color)};
  }
  &:checked::before {
    background-color: ${({ color }) => color};
    border: 1px solid ${({ color }) => color};
    margin-bottom: 2px;
    margin-left: 2.5px;
  }
`;

//  &:focus + &::before {
//     border: 2px solid #a4a4a4;
//   }

export const StyledTitleDeadline = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
  margin-left: 24px;
`;
