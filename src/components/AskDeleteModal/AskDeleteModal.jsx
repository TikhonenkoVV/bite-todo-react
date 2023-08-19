import { useDeleteBoard } from 'hooks/useDeleteBoard';
import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { deleteBoards } from 'store/boards/operations';
import {
  DivStyled,
  StyledButton,
  StyledP,
  WrapperButton,
} from './AskDeleteModal.stayled';

export const AskDeleteModal = ({ onClick, id, title }) => {
  const { isDeleteBoard } = useDeleteBoard(id);
  const dispatch = useDispatch();
  const handleDeleteBoard = () => {
    dispatch(deleteBoards(id));
    if (isDeleteBoard) {
      Notify.info(
        `Sorry, the request to delete board ${title} failed, please try again.`
      );
      return;
    }
    Notify.info(`The board ${title} was successfully deleted`);
  };

  return (
    <>
      <DivStyled>
        <StyledP>Delete board?</StyledP>
        <WrapperButton>
          <StyledButton type="button" onClick={onClick}>
            Cancel
          </StyledButton>
          <StyledButton type="button" onClick={handleDeleteBoard}>
            Delete
          </StyledButton>
        </WrapperButton>
      </DivStyled>
    </>
  );
};
