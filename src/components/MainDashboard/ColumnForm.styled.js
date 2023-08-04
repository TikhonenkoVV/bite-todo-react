import styled from '@emotion/styled';
import { Field } from 'formik';
// import { theme } from 'styles/theme';

export const FormTitle = styled.p`
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  color: #fff;
  /* color: #161616; */
`;

export const FormContainer = styled.div`
  position: relative;
  max-width: 335px;
  height: 221px;
  padding: 24px;
  border-radius: 8px;
  background: #151515;
  /* background: #fcfcfc; */
  @media (min-width: 768px) {
    min-width: 350px;
  }
`;

export const FormInput = styled(Field)`
  padding: 14px 18px;
  margin-bottom: 24px;
  width: 100%;
  height: 49px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  /* color: #161616; */
  line-height: normal;
  letter-spacing: -0.28px;
  background: #1f1f1f;
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

  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
`;

export const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
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

export const ColumnFormIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  /* background: #fff; */
  background: #000;
  border-radius: 6px;
`;

export const ColumnFormIcon = styled.svg`
  width: 14px;
  height: 14px;
  /* fill: #121212; */
  fill: #fff;
`;

export const ColumnFormCloseIcon = styled.svg`
  width: 18px;
  height: 18px;
  /* fill: #121212; */
  fill: #fff;
`;
