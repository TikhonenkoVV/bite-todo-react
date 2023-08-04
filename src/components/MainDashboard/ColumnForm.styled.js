import styled from '@emotion/styled';
import { Field } from 'formik';
// import { theme } from 'styles/theme';

export const FormTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  color: #161616;
`;

export const FormContainer = styled.div`
  position: relative;
  max-width: 335px;
  height: 221px;
  padding: 24px;
  border-radius: 8px;
  background: #fcfcfc;
  @media (min-width: 375px) {
    min-width: 350px;
  }
`;

export const FormInput = styled(Field)`
  padding: 14px 18px;
  width: 100%;
  height: 49px;
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

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  outline: 1px solid red;
`;

export const AddButton = styled.button`
  display: block;
  width: 100%;
  height: 49px;
  padding: 10px 0px 11px 0px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  color: #161616;
  border-radius: 8px;
  background: #bedbb0;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background: #9dc888;
  }
`;
