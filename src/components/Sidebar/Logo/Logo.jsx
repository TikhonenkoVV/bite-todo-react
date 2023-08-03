import { DivStyled, PStyled } from './Logo.styled';

export const Logo = () => {
  return (
    <DivStyled>
      <svg width="32" height="32">
        <use></use>
      </svg>
      <PStyled>Task Pro</PStyled>
    </DivStyled>
  );
};
