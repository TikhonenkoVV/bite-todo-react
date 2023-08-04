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
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  margin-bottom: 10px;
  margin-left: 20px;

  padding: 14px 115px 14px 18px;
  font-size: 14px;

  border-radius: 4px;
  color: #ffffff;
`;

export const StyledTextArea = styled.textarea`
  margin-left: 20px;
  color: #ffffff;
  display: flex;
  padding: 14px 130px 122px 18px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
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

export const Container = styled.div`
  color: #bedbb0;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #bedbb0;
  margin-left: 24px;
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
  &::before {
    margin-right: 10px;
    content: '';
    display: inline-block;
    border-radius: 50%;
    width: ${({ checked }) => (checked ? '8px' : '14px')};
    height: ${({ checked }) => (checked ? '8px' : '14px')};
    border: ${({ checked, colors }) => (checked ? '1px' : '0px')} solid
      ${({ colors }) => colors};
    background-color: ${({ checked, value }) => (checked ? value : value)};
    transition: width 0.2s ease, height 0.2s ease; /* Добавляем transition */
  }
  &:checked::before {
    margin-bottom: 0.8px;
    margin-left: 1.6px;
  }
 }
`;

// &::before {
//   margin-right: 10px;
//   content: '';
//   display: inline-block;
//   border-radius: 50%;
//   width: ${({ checked }) => (checked ? '8px' : '14px')};
//   height: ${({ checked }) => (checked ? '8px' : '14px')};
//   border: 1px solid ${({ checked, colors, value }) => (checked ? value : colors)};
//   background-color: ${({ checked, value }) => (checked ? value : 'transparent')};
//   transition: width 0.2s ease, height 0.2s ease;
// }

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
