import React from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import {
  Title,
  FormBox,
} from './ModalForBoards.styled';
import FormForBoards from './Form/FormForBoards'
import { ButtonCloseModal } from 'components/ButtonCloseModal/ButtonCloseModal';

const MoodalForBoards = ({ onClick, boardId, type }) => {

  return (
    <FormBox>
      <ButtonCloseModal onClose={onClick} />
      <Title>{type === 'edit' ? 'Edit board' : 'New board'}</Title>
      <FormForBoards  boardId={boardId} type={type} onClick={onClick} />
    </FormBox>
  );
};

MoodalForBoards.propTypes = {
  onClick: PropTypes.func.isRequired,
  boardId: PropTypes.string,
  type: PropTypes.oneOf(['new', 'edit']).isRequired,
};

export default MoodalForBoards;
