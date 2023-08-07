import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  width: 350px;
  height: 522px;
  background-color: #151515;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 10px;
`;

export const StyledBtnClose = styled.button`
  width: 18px;
  height: 18px;
  margin-left: 212px;
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
  resize: none;
  margin-left: 20px;
  color: #ffffff;
  display: flex;
  padding: 14px 113px 122px 18px;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  margin-bottom: 24px;
`;

export const StyledTitelBtn = styled.label`
  color: rgba(255, 255, 255, 50%);
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
  background: #bedbb0;
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
    transition: width 0.2s ease, height 0.2s ease; /* Добавляем transition */
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
  background-color: #161616;
  border-radius: 20%;
`;

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

export const StyledFormikTitleNotification = styled.div`
  margin-left: 24px;
  margin-bottom: 5px;
  color: red;
  font-size: 12px;
`;

export const StyledFormikDescriptionNotification = styled.div`
  margin-top: -15px;
  margin-left: 24px;
  color: red;
  font-size: 12px;
`;

export const StyledFormikColorNotification = styled.div`
  margin-top: -5px;
  margin-left: 24px;
  color: red;
  font-size: 12px;
`;
