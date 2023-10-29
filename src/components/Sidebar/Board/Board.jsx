import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { useAskDeleteModal, useModal } from 'hooks/useModal';
import { selectColumns } from 'store/columns/selectors';
import { deleteBoards } from 'store/boards/operations';

import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  DivIconStyled,
  DivNameStyled,
  LiStyled,
  TextStyled,
} from './Board.styled';
import { Modal } from 'components/Modal';
import MoodalForBoards from 'components/ModalForBoards/ModalForBoards';
import { AskDeleteModal } from 'components/AskDeleteModal/AskDeleteModal';
import { useState } from 'react';
import { ButtonIcon } from 'components/miniComponents/ButtonIcon/ButtonIcon';

export const Board = ({
  board,
  idActiveBoard,
  changeIdActiveBoard,
  changeLengthBoard,
}) => {
  const [title, setTitle] = useState('Delete board?');
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isAskDeleteModalOpen, openAskDeleteModal, closeAskDeleteModal } =
    useAskDeleteModal();

  const dispatch = useDispatch();

  const columns = useSelector(selectColumns);

  const handleActiveBoard = id => {
    changeIdActiveBoard(id);
  };

  const handleAskDeleteBoard = () => {
    openAskDeleteModal();
    switch (columns.length) {
      case 0:
        setTitle(`Delete board "${board.title}"?`);
        break;
      case 1:
        setTitle(`Delete board "${board.title}" with one column?`);
        break;
      default:
        setTitle(
          `Delete board "${board.title}" with ${columns.length} columns?`
        );
    }
  };

  const handleDeleteBoard = () => {
    dispatch(deleteBoards(board._id));
    changeLengthBoard(0);
    Notify.info(`The board ${board.title} was successfully deleted`);
  };

  return (
    <>
      <LiStyled
        onClick={() => handleActiveBoard(board._id)}
        className={board._id === idActiveBoard && 'active'}
      >
        <DivNameStyled className={board._id === idActiveBoard && 'active'}>
          <Svg w={18} h={18} icon={board.dashboardIcon} />
          <TextStyled className={board._id === idActiveBoard && 'active'}>
            {board.title}
          </TextStyled>
        </DivNameStyled>
        {idActiveBoard === board._id && (
          <DivIconStyled>
            <ButtonIcon
              ariaLabel="edit"
              action={openModal}
              w={16}
              h={16}
              icon="pencil"
            />
            <ButtonIcon
              ariaLabel="delete"
              action={handleAskDeleteBoard}
              w={16}
              h={16}
              icon="trash"
            />
          </DivIconStyled>
        )}
      </LiStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MoodalForBoards
            onClick={closeModal}
            boardId={idActiveBoard}
            type={'edit'}
          />
        </Modal>
      )}
      {isAskDeleteModalOpen && (
        <Modal onClose={closeAskDeleteModal}>
          <AskDeleteModal
            onClick={closeAskDeleteModal}
            handleDelete={handleDeleteBoard}
            title={title}
          />
        </Modal>
      )}
    </>
  );
};
