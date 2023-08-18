import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { useAskDeleteModal, useModal } from 'hooks/useModal';
import { selectColumns } from 'store/columns/selectors';
import { deleteBoards } from 'store/boards/operations';

import sprite from 'img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import {
  ButtonDelete,
  ButtonEdit,
  DivIconStyled,
  DivNameStyled,
  LiStyled,
  TextStyled,
} from './Board.styled';
import { Modal } from 'components/Modal';
import EditBoard from 'components/NewBoard/EditBoard';
import { AskDeleteModal } from 'components/AskDeleteModal/AskDeleteModal';

export const Board = ({ board, idActiveBoard, changeIdActiveBoard }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const { isAskDeleteModalOpen, openAskDeleteModal, closeAskDeleteModal } =
    useAskDeleteModal();

  const dispatch = useDispatch();

  const columns = useSelector(selectColumns);

  const handleActiveBoard = id => {
    changeIdActiveBoard(id);
  };

  const handleDeleteBoard = (id, title) => {
    if (!columns.length) {
      dispatch(deleteBoards(id));
      Notify.success(`The board ${title} was successfully deleted`);
      return;
    }
    openAskDeleteModal();
  };

  return (
    <>
      <LiStyled
        key={board._id}
        onClick={() => handleActiveBoard(board._id)}
        className={board._id === idActiveBoard && 'active'}
      >
        <DivNameStyled className={board._id === idActiveBoard && 'active'}>
          <Svg w={18} h={18} use={`${sprite}#${board.dashboardIcon}`} />
          <TextStyled className={board._id === idActiveBoard && 'active'}>
            {board.title}
          </TextStyled>
        </DivNameStyled>
        {idActiveBoard === board._id && (
          <DivIconStyled>
            <ButtonEdit type="button" onClick={openModal}>
              <Svg w={16} h={16} use={`${sprite}#icon-pencil`} />
            </ButtonEdit>
            <ButtonDelete
              type="button"
              onClick={() => handleDeleteBoard(board._id, board.title)}
            >
              <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
            </ButtonDelete>
          </DivIconStyled>
        )}
      </LiStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <EditBoard onClick={closeModal} id={idActiveBoard} />
        </Modal>
      )}
      {isAskDeleteModalOpen && (
        <Modal onClose={closeAskDeleteModal}>
          <AskDeleteModal
            onClick={closeAskDeleteModal}
            id={idActiveBoard}
            title={board.title}
          />
        </Modal>
      )}
    </>
  );
};
