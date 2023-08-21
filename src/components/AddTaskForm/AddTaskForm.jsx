import React from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../store/columns/operations';
import { useSelector } from 'react-redux';
import { selectColumns } from 'store/columns/selectors';
import { TaskForm } from './TaskForm'; 
import PropTypes from 'prop-types';

export const AddTasks = ({ boardId, columnId, closeModal, taskId }) => {
  const dispatch = useDispatch();

  const columns = useSelector(selectColumns);
  const currentColumn = columns.filter(val => val._id === columnId);
  const index = currentColumn[0].cards.length;

  const handleSubmit = async values => {
    try {
      await dispatch(addTask({ ...values, index, boardId, columnId, taskId }));
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <TaskForm
      onSubmit={handleSubmit}
      onClose={closeModal}
      isEditing={false}
    />
  );
};

AddTasks.propTypes = {
  boardId: PropTypes.string.isRequired,
  columnId: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  taskId: PropTypes.string,
};