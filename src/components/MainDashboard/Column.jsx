import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Draggable } from 'react-beautiful-dnd';
import { deleteColumn } from '../../store/columns/operations';
import sprite from '../../img/icons/sprite.svg';
import { useAskDeleteModal, useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { ColumnForm } from './ColumnForm';

import {
  ColumnContainer,
  ColumnTitleContainer,
  ColumnTitle,
  IconContainer,
  TitleIcon,
  IconButton,
} from './Column.styled';
import { CardList } from 'components/Card/CardList';
import { AddTasks } from 'components/AddTaskForm/AddTaskForm';
// import { useDeleteColumn } from 'hooks/useDeleteBoard';
import { AskDeleteModal } from 'components/AskDeleteModal/AskDeleteModal';
import { PrimaryButton } from 'components/PrimaryButton/PrimaryButton';
import { IconAddEditDeleteModal } from 'components/miniComponents/IconAddEditDeleteModal/IconAddEditDeleteModal';

export const Column = ({ _id, title, createdAt, cards, owner, index }) => {
  const [titleColumn, setTitleColumn] = useState('Delete column?');
  const [isEditCardMode, setIsEditCardMode] = useState(false);

  const { isModalOpen, closeModal, openModal } = useModal();
  const { isAskDeleteModalOpen, openAskDeleteModal, closeAskDeleteModal } =
    useAskDeleteModal();

  const dispatch = useDispatch();

  const handleDeleteColumnEmty = () => {
    openAskDeleteModal();
    switch (cards.length) {
      case 0:
        setTitleColumn(`Delete column "${title}"?`);
        break;
      case 1:
        setTitleColumn(`Delete column "${title}" with one task?`);
        break;
      default:
        setTitleColumn(`Delete column "${title}" with ${cards.length} tasks?`);
    }
  };

  const handleDeleteColumnFull = () => {
    dispatch(deleteColumn({ boardId: owner, columnId: _id }));
    Notify.info(`The column ${title} was successfully deleted`);
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
      {provided => (
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
              <IconButton type="button" onClick={handleDeleteColumnEmty}>
                <TitleIcon>
                  <use href={`${sprite}#icon-trash`}></use>
                </TitleIcon>
              </IconButton>
            </IconContainer>
          </ColumnTitleContainer>
          {cards && <CardList boardId={owner} columnId={_id} cards={cards} />}
          <PrimaryButton
            type="button"
            action={handleAddCardButtonClick}
            title="Add another card"
          >
            <IconAddEditDeleteModal icon="plus" />
          </PrimaryButton>
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
              <AddTasks
                boardId={owner}
                columnId={_id}
                closeModal={closeModal}
                index={index}
              />
            </Modal>
          )}
          {isAskDeleteModalOpen && (
            <Modal onClose={closeAskDeleteModal}>
              <AskDeleteModal
                onClick={closeAskDeleteModal}
                handleDelete={handleDeleteColumnFull}
                title={titleColumn}
              />
            </Modal>
          )}
        </ColumnContainer>
      )}
    </Draggable>
  );
};
