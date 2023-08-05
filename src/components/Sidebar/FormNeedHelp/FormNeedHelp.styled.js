import styled from '@emotion/styled';

export const StyledDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 24px;
  border-radius: 8px;
  background: #151515;

  width: 335px;
  min-height: 335px;
`;

export const StyledP = styled.p`
  font-family: Poppins;
  color: #ffffff;
  font-size: 18px;
  letter-spacing: -0.02em;
`;

export const StyledInput = styled.input`
  outline: none;
  width: 100%;
  height: 49px;
  padding: 14px 18px;
  margin: 24px 0 14px 0;

  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #1f1f1f;
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.02em;

  &:focus {
    opacity: 1;
    border: 1px solid #bedbb0;
  }
`;

export const StyledTextArea = styled.textarea`
  outline: none;
  width: 100%;
  height: 120px;
  padding: 14px 18px;

  border-radius: 8px;
  border: 1px solid #bedbb0;
  background: #1f1f1f;
  opacity: 0.4;
  box-shadow: 0px 4px 16px 0px rgba(22, 22, 22, 0.08);

  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  letter-spacing: -0.02em;

  &:focus {
    opacity: 1;
    border: 1px solid #bedbb0;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  width: 100%;
  height: 49px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #bedbb0;
  color: #161616;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  margin-top: 24px;

  &:hover,
  &:focus {
    background: #9dc888;
  }
`;

export const DivIconClose = styled.div`
  position: absolute;
  color: white;
  top: 14px;
  right: 14px;
  cursor: pointer;
`;
