import { useState } from 'react';
import sprite from 'img/icons/sprite.svg';
import {
  ButtonStyled,
  DivIconStyled,
  DivNameStyled,
  DivStyled,
  H2styled,
  H3Styled,
  NavStyled,
  PStyled,
  SvgStyled,
  UlStyled,
} from './ControlBoard.styled';

export const ControlBoard = () => {
  const [isModalNew, setIsModalNew] = useState(false);
  const [isActiveBoard, setActiveBoard] = useState('');
  // const [isModalEdit, setIsModalEdit] = useState(false);
  const boards = [
    { id: '1', title: 'title first', svg: 'name' },
    { id: '2', title: 'title two', svg: 'name' },
  ];

  const handleOpenModal = () => {
    setIsModalNew(true);
  };

  const handleActiveBoard = id => {
    console.log(id);
    setActiveBoard(id);
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
      <UlStyled>
        {boards.map(board => (
          <li
            key={board.id}
            id={board.id}
            onClick={() => handleActiveBoard(board.id)}
          >
            <NavStyled>
              <DivNameStyled>
                <SvgStyled w={18} h={18} use={`${sprite}#icon-puzzle`} />
                <H3Styled>{board.title}</H3Styled>
              </DivNameStyled>
              {isActiveBoard === board.id && (
                <DivIconStyled>
                  <SvgStyled w={16} h={16} use={`${sprite}#icon-pencil`} />
                  <SvgStyled w={16} h={16} use={`${sprite}#icon-trash`} />
                </DivIconStyled>
              )}
            </NavStyled>
          </li>
        ))}
      </UlStyled>
    </>
  );
};

export default ControlBoard;
