import React from 'react';
import sprite from '../../img/icons/sprite.svg';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { ColumnForm } from '../../components/MainDashboard';

import {
  ColumnContainer,
  ColumnTitleContainer,
  ColumnTitle,
  IconContainer,
  TitleIcon,
  IconButton,
  AddCardButton,
  AddCardIconContainer,
  AddCardIcon,
} from './Column.styled';

const handleDeleteButtonClick = id => {
  console.log('Delete: id: ', id);
};

export const Column = ({ id, title }) => {
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <ColumnContainer>
      <ColumnTitleContainer>
        <ColumnTitle>{title}</ColumnTitle>
        <IconContainer>
          <IconButton type="button" onClick={openModal}>
            <TitleIcon>
              <use href={`${sprite}#icon-pencil`}></use>
            </TitleIcon>
          </IconButton>
          <IconButton type="button" onClick={() => handleDeleteButtonClick(id)}>
            <TitleIcon>
              <use href={`${sprite}#icon-trash`}></use>
            </TitleIcon>
          </IconButton>
        </IconContainer>
      </ColumnTitleContainer>
      <AddCardButton>
        <AddCardIconContainer>
          <AddCardIcon>
            <use href={`${sprite}#icon-plus`}></use>
          </AddCardIcon>
        </AddCardIconContainer>
        <div>Add another card</div>
      </AddCardButton>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ColumnForm onCloseForm={closeModal} isEditMode={true} />
        </Modal>
      )}
    </ColumnContainer>
  );
};
