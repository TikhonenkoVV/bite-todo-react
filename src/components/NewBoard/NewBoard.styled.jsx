import styled from '@emotion/styled';
import { Field } from 'formik';

export const FormBox = styled.div`
  box-sizing: border-box;
  width: 350px;
  color: #fff;
  border-radius: 8px;
  border: 1px solid rgba(190, 219, 176, 0.5);
  background: #151515;
  padding: 24px;
`;

export const FormInput = styled(Field)`
  display: block;
  width: 256px;
  border-radius: 8px;
  border: 1px solid #bedbb0;
  opacity: 0.4;
  background: #1f1f1f;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);
  padding: 14px 18px;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const Text = styled.p`
  margin-top: 24px;
  margin-bottom: 14px;
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
  margin-bottom: 24px;
`;

export const RadioIconBox = styled.div`
  display: flex;
  gap: 8px;
  opacity: 50%;
`;

export const RadioBackgroundBox = styled.div`
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  width: 300px;
  margin-bottom: 40px;
`;

export const RadioButton = styled(Field)`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const RadioImg = styled.img`
  display: block;
  width: 28px;
  border-radius: 25%;
  box-sizing: border-box;
  border: 1px solid transparent;
`;

export const RadioIcon = styled.label`
  color: red;
  
`;
