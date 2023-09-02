import { IconAddEditDeleteModal } from 'components/miniComponents/IconAddEditDeleteModal/IconAddEditDeleteModal';
import { PrimaryButton } from 'components/miniComponents/PrimaryButton/PrimaryButton';
import { StyledDiv, StyledP, WrapperButton } from './AskDeleteModal.stayled';

export const AskDeleteModal = ({ onClick, handleDelete, title }) => {
  return (
    <>
      <StyledDiv>
        <StyledP>{title}</StyledP>
        <WrapperButton>
          <PrimaryButton type="button" action={onClick} title="Cancel" />
          <PrimaryButton type="button" action={handleDelete} title="Delete">
            <IconAddEditDeleteModal icon="trash" />
          </PrimaryButton>
        </WrapperButton>
      </StyledDiv>
    </>
  );
};
