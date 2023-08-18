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
  const dispatch = useDispatch();
  const handleDeleteBoard = () => {
    dispatch(deleteBoards(id));

    Notify.success(`The board ${title} was successfully deleted`);
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
