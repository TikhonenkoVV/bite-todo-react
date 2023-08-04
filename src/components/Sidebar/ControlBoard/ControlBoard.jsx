import { useState } from 'react';
import sprite from 'img/icons/sprite.svg';
import { Modal } from 'components/Modal/Modal';
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
          <SvgStyled w={20} h={20} use={`${sprite}#icon-plus`} />
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
      {isModalNew && <Modal />}
    </>
  );
};

export default ControlBoard;
