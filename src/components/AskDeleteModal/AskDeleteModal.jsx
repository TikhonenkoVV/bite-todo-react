import { IconAddEditDeleteModal } from 'components/miniComponents/IconAddEditDeleteModal/IconAddEditDeleteModal';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { DivStyled, StyledP, WrapperButton } from './AskDeleteModal.stayled';

export const AskDeleteModal = ({ onClick, handleDelete, title }) => {
  return (
    <>
      <DivStyled>
        <StyledP>{title}</StyledP>
        <WrapperButton>
          <PrimaryButton type="button" action={onClick} title="Cancel" />
          <PrimaryButton type="button" action={handleDelete} title="Delete">
            <IconAddEditDeleteModal icon="trash" />
          </PrimaryButton>
        </WrapperButton>
      </DivStyled>
    </>
  );
};
