import {
  CardDescriptionStyled,
  CardFooter,
  CardParamsTitle,
  CardParamsWrapper,
  CardStyled,
  CardTitleStyled,
  DeadlineDate,
  PriorityStatus,
  ToolsButtonBell,
  ToolsWrapper,
} from './Card.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { forwardRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'components/Modal';
import { EditTask } from 'components/AddTaskForm/EditTaskForm';
import { deleteTask } from '../../store/columns/operations';
import moment from 'moment';
import { ButtonIcon } from 'components/miniComponents/ButtonIcon/ButtonIcon';

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
          {/* <ButtonIcon action={openEditModal} w={16} h={16} icon='bell'  pastDeadline={moment(deadline).isBefore(moment())}/> */}
          <ToolsButtonBell
            type="button"
            pastDeadline={moment(deadline).isBefore(moment())}
          >
            <Svg w={16} h={16} icon='bell' />
          </ToolsButtonBell>
          <ToolsWrapper>
          <ButtonIcon action={openEditModal} w={16} h={16} icon='pencil'/>
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
          <ButtonIcon action={handleDeleteTaskButtonClick} w={16} h={16} icon='trash'/>
          </ToolsWrapper>
        </CardFooter>
      </CardStyled>
    );
  }
);
