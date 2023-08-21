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
import MoodalForBoards from 'components/ModalForBoards/ModalForBoards';
import { AskDeleteModal } from 'components/AskDeleteModal/AskDeleteModal';
// import { selectBoardsState } from 'store/boards/selectors';
import { useDeleteBoard } from 'hooks/useDeleteBoard';
// import { useMessageDeleteBoard } from 'hooks/useMessageDeleteBoard';

export const Board = ({ board, idActiveBoard, changeIdActiveBoard }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isAskDeleteModalOpen, openAskDeleteModal, closeAskDeleteModal } =
    useAskDeleteModal();
  const { isDeleteBoard } = useDeleteBoard(board._id);
  // const { message } = useMessageDeleteBoard(board.id, board.title);
  // console.log(message);

  const dispatch = useDispatch();

  // const { boards } = useSelector(selectBoardsState);
  const columns = useSelector(selectColumns);

  const handleActiveBoard = id => {
    changeIdActiveBoard(id);
  };

  const handleDeleteBoardEmty = async (id, title) => {
    if (!columns.length) {
      await dispatch(deleteBoards(id));
      // Notify.info(message);
      // const isDeleteBoard = boards.find(({ _id }) => _id === id);
      if (isDeleteBoard) {
        Notify.info(`The board ${title} was successfully deleted`);
        return;
      }
      Notify.info(
        `Sorry, the request to delete board ${title} failed, please try again.`
      );
      return;
    }
    openAskDeleteModal();
  };

  const handleDeleteBoardFull = async (id, title) => {
    console.log(isDeleteBoard);
    await dispatch(deleteBoards(id));
    if (isDeleteBoard) {
      Notify.info(`The board ${title} was successfully deleted`);
      return;
    }
    Notify.info(
      `Sorry, the request to delete board ${title} failed, please try again.`
    );
  };

  return (
    <>
      <LiStyled
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
              onClick={() => handleDeleteBoardEmty(board._id, board.title)}
            >
              <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
            </ButtonDelete>
          </DivIconStyled>
        )}
      </LiStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MoodalForBoards onClick={closeModal} boardId={idActiveBoard} type={'edit'} />
        </Modal>
      )}
      {isAskDeleteModalOpen && (
        <Modal onClose={closeAskDeleteModal}>
          <AskDeleteModal
            onClick={closeAskDeleteModal}
            handleDelete={() => handleDeleteBoardFull(board._id, board.title)}
            title={'Delete board?'}
          />
        </Modal>
      )}
    </>
  );
};
