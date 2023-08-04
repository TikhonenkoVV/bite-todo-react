import styled from '@emotion/styled';

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
