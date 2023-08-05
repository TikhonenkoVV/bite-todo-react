import { useState } from 'react';
import sprite from 'img/icons/sprite.svg';
import { Modal } from 'components/Modal/Modal';
import { useEditModal, useModal } from 'hooks/useModal';
import NewBoard from '../../NewBoard/NewBoard';
import EditBoard from '../../NewBoard/EditBoard';
import {
  ButtonStyled,
  DivIconStyled,
  DivNameStyled,
  DivStyled,
  H2styled,
  H3Styled,
  NavStyled,
  PStyled,
  UlStyled,
} from './ControlBoard.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const ControlBoard = () => {
  const [isActiveBoard, setActiveBoard] = useState('');
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isModalEditOpen, openEditModal, closeEditModal } = useEditModal();

  const boards = [
    { id: '1', title: 'title first', svg: 'name' },
    { id: '2', title: 'title two', svg: 'name' },
  ];

  const handleActiveBoard = id => {
    setActiveBoard(id);
  };

  return (
    <>
      <H2styled>My boards</H2styled>
      <DivStyled>
        <PStyled>Create a new board</PStyled>
        <ButtonStyled type="button" onClick={openModal}>
          <Svg w={20} h={20} use={`${sprite}#icon-plus`} />
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
                <Svg w={18} h={18} use={`${sprite}#icon-puzzle`} />
                <H3Styled>{board.title}</H3Styled>
              </DivNameStyled>
              {isActiveBoard === board.id && (
                <DivIconStyled>
                  <button type="button" onClick={openEditModal}>
                    <Svg w={16} h={16} use={`${sprite}#icon-pencil`} />
                  </button>
                  <button type="button">
                    <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
                  </button>
                </DivIconStyled>
              )}
            </NavStyled>
          </li>
        ))}
      </UlStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewBoard onClick={closeModal} />
        </Modal>
      )}
      {isModalEditOpen && (
        <Modal onClose={closeEditModal}>
          <EditBoard onClick={closeEditModal} id={isActiveBoard}/>
        </Modal>
      )}
    </>
  );
};

export default ControlBoard;
