import { useState } from 'react';
import {
  ButtonStyled,
  DivStyled,
  H2styled,
  PStyled,
} from './ControlBoard.styled';

export const ControlBoard = () => {
  const [isModalNew, setIsModalNew] = useState(false);
  // const [isModalEdit, setIsModalEdit] = useState(false);

  const handleOpenModal = () => {
    setIsModalNew(true);
  };

  return (
    <>
      <H2styled>My boards</H2styled>
      <DivStyled>
        <PStyled>Create a new board</PStyled>
        <ButtonStyled type="button" onClick={handleOpenModal}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <use></use>
            <path
              d="M5 2.08325V7.91659"
              stroke="#161616"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.08331 5H7.91665"
              stroke="#161616"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonStyled>
      </DivStyled>
    </>
  );
};
