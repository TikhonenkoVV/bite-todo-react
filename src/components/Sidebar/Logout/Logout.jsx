import { ButtonStyled, PStyled } from './Logout.styled';

export const Logout = () => {
  return (
    <ButtonStyled type="button">
      <svg width="32" height="32">
        <use></use>
        <path
          d="M4 16H28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 8H28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 24H28"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <PStyled>Log out</PStyled>
    </ButtonStyled>
  );
};
