import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormTitle = styled.p``;

export const FormContainer = styled.div`
  width: 350px;
  height: 221px;
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
`;

export const FormInput = styled(Field)`
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 400;
  color: #161616;
  line-height: normal;
  letter-spacing: -0.28px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
    outline: none;
  }
`;

export const CloseButton = styled.button``;

export const AddButton = styled.button``;
