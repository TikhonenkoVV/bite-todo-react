import React from 'react';
import { Modal } from '../Modal/Modal';
import { useModal } from 'hooks/useModal';
import MoodalForBoards from 'components/ModalForBoards/ModalForBoards';

import { CreateBoardContainer, CreateBoardButton } from './CreateBoard.styled';

const CreateBoard = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  return (
    <>
      <CreateBoardContainer>
        Before starting your project, it is essential{' '}
        <CreateBoardButton type="button" onClick={openModal}>
          to create a board
        </CreateBoardButton>
        to visualize and track all the necessary tasks and milestones. This
        board serves as a powerful tool to organize the workflow and ensure
        effective collaboration among team members.
      </CreateBoardContainer>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <MoodalForBoards onClick={closeModal} />
        </Modal>
      )}
    </>
  );
};

export default CreateBoard;
