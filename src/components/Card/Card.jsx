import {
  CardDescriptionStyled,
  CardFooter,
  CardParamsTitle,
  CardParamsWrapper,
  CardStyled,
  CardTitleStyled,
  DeadlineDate,
  PriorityStatus,
  ToolsButton,
  ToolsButtonBell,
  ToolsWrapper,
} from './Card.styled';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal';
import { EditTask } from 'components/AddTaskForm/EditTaskForm';
import { deleteTask } from '../../store/columns/operations';
import moment from 'moment';

export const Card = forwardRef(
  (
    {
      _id,
      title,
      description,
      priority,
      deadline,
      index,
      boardId,
      columnId,
      taskData,
      ...rest
    },
    ref
  ) => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const dispatch = useDispatch();

    const openEditModal = () => {
      setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
      setIsEditModalOpen(false);
    };

    const handleDeleteTaskButtonClick = async () => {
      await dispatch(deleteTask({ boardId, columnId, taskId: _id }));
    };

    const formattedDeadline = moment(deadline).format('DD/MM/YYYY');

    return (
      <CardStyled color={priority} ref={ref} {...rest}>
        <CardTitleStyled>{title}</CardTitleStyled>
        <CardDescriptionStyled>{description}</CardDescriptionStyled>
        <CardFooter>
          <CardParamsWrapper>
            <div>
              <CardParamsTitle>Priority</CardParamsTitle>
              <PriorityStatus color={priority}>{priority}</PriorityStatus>
            </div>
            <div>
              <CardParamsTitle>Deadline</CardParamsTitle>
              <DeadlineDate>{formattedDeadline}</DeadlineDate>
            </div>
          </CardParamsWrapper>
          <ToolsButtonBell
            type="button"
            pastDeadline={moment(deadline).isBefore(moment())}
          >
            <Svg w={16} h={16} use={`${sprite}#icon-bell`} />
          </ToolsButtonBell>
          <ToolsWrapper>
            <ToolsButton type="button" onClick={openEditModal}>
              <Svg w={16} h={16} use={`${sprite}#icon-pencil`} />
            </ToolsButton>
            {isEditModalOpen && (
              <Modal onClose={closeEditModal}>
                <EditTask
                  boardId={boardId}
                  columnId={columnId}
                  taskId={_id}
                  taskData={taskData}
                  title={title}
                  description={description}
                  deadline={deadline}
                  index={index}
                  priority={priority}
                  closeModal={closeEditModal}
                />
              </Modal>
            )}
            <ToolsButton type="button" onClick={handleDeleteTaskButtonClick}>
              <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
            </ToolsButton>
          </ToolsWrapper>
        </CardFooter>
      </CardStyled>
    );
  }
);
