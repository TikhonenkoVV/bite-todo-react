import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask } from '../../store/columns/operations';
import { TaskForm } from './TaskForm';
import PropTypes from 'prop-types';

export const EditTask = ({
  boardId,
  columnId,
  closeModal,
  title,
  description,
  priority,
  index,
  taskId,
  deadline,
}) => {
  const dispatch = useDispatch();

  const handleSubmit = async values => {
    if (values.priority === 'without') values.deadline = new Date(0);
    try {
      await dispatch(editTask({ ...values, index, boardId, columnId, taskId }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <TaskForm
      title={title}
      description={description}
      priority={priority}
      index={index}
      taskId={taskId}
      deadline={deadline}
      onSubmit={handleSubmit}
      onClose={closeModal}
      isEditing={true}
    />
  );
};

EditTask.propTypes = {
  boardId: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priority: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  taskId: PropTypes.string.isRequired,
  deadline: PropTypes.string.isRequired,
};
