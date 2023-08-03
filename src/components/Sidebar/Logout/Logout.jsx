import { ButtonStyled, PStyled } from './Logout.styled';

export const Logout = () => {
  return (
    <ButtonStyled type="button">
      <svg width="32" height="32">
        <use></use>
      </svg>
      <PStyled>Log out</PStyled>
    </ButtonStyled>
  );
};
