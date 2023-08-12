import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Draggable } from 'react-beautiful-dnd';
import { deleteColumn } from '../../store/columns/operations';
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
import { CardList } from 'components/Card/CardList';
import { AddTasks } from 'components/AddTaskForm/AddTaskForm';

export const Column = ({ _id, title, createdAt, cards, owner, index }) => {
  const [isEditCardMode, setIsEditCardMode] = useState(false);
  const { isModalOpen, closeModal, openModal } = useModal();
  const dispatch = useDispatch();
  const hasCards = cards && cards.length > 0;

  const handleDeleteButtonClick = async () => {
    if (hasCards) {
      Notify.warning(
        'It is impossible to remove column when exists one or more cards.'
      );
      return;
    }
    await dispatch(deleteColumn({ boardId: owner, columnId: _id }));
  };

  const handleAddCardButtonClick = () => {
    setIsEditCardMode(false);
    openModal();
  };

  const handleEditCardButtonClick = () => {
    setIsEditCardMode(true);
    openModal();
  };

  return (
    <Draggable draggableId={_id} index={index}>
      {(provided) => (
        <ColumnContainer ref={provided.innerRef} {...provided.draggableProps}>
          <ColumnTitleContainer {...provided.dragHandleProps}>
            <ColumnTitle>{title}</ColumnTitle>
            <IconContainer>
              <IconButton
                type="button"
                onClick={() => handleEditCardButtonClick(openModal)}
              >
                <TitleIcon>
                  <use href={`${sprite}#icon-pencil`}></use>
                </TitleIcon>
              </IconButton>
              <IconButton type="button" onClick={handleDeleteButtonClick}>
                <TitleIcon>
                  <use href={`${sprite}#icon-trash`}></use>
                </TitleIcon>
              </IconButton>
            </IconContainer>
          </ColumnTitleContainer>
          {cards && <CardList boardId={owner} columnId={_id} cards={cards} />}
          <AddCardButton onClick={handleAddCardButtonClick}>
            <AddCardIconContainer>
              <AddCardIcon>
                <use href={`${sprite}#icon-plus`}></use>
              </AddCardIcon>
            </AddCardIconContainer>
            <div>Add another card</div>
          </AddCardButton>
          {isModalOpen && isEditCardMode && (
            <Modal onClose={closeModal}>
              <ColumnForm
                id={_id}
                boardId={owner}
                onCloseForm={closeModal}
                columnTitle={title}
                isEditMode={true}
              />
            </Modal>
          )}
          {isModalOpen && !isEditCardMode && (
            <Modal onClose={closeModal}>
              <AddTasks boardId={owner} columnId={_id} closeModal={closeModal} />
            </Modal>
          )}
        </ColumnContainer>
      )}
    </Draggable>
  );
};
