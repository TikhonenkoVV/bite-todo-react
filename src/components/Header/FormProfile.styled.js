import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FromStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 14px 18px 14px 18px;
  color: #ffffff;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  background-color: transparent;

  &::placeholder {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.28px;
  }
`;

export const BtnSubmitStyled = styled.button`
  width: 100%;
  padding: 14px 0;
  background-color: #bedbb0;
  color: #161616;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
