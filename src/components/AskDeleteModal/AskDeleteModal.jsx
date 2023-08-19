import {
  DivStyled,
  StyledButton,
  StyledP,
  WrapperButton,
} from './AskDeleteModal.stayled';

export const AskDeleteModal = ({ onClick, handleDelete, title }) => {
  return (
    <>
      <DivStyled>
        <StyledP>{title}</StyledP>
        <WrapperButton>
          <StyledButton type="button" onClick={onClick}>
            Cancel
          </StyledButton>
          <StyledButton type="button" onClick={handleDelete}>
            Delete
          </StyledButton>
        </WrapperButton>
      </DivStyled>
    </>
  );
};
