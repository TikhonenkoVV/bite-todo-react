import React from 'react';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from './ModalForBoards.styled';
import FormForBoards from './Form/FormForBoards';
import { ButtonCloseModal } from 'components/miniComponents/ButtonCloseModal/ButtonCloseModal';
import { ModalContent } from 'components/Modal/Modal.styled';

const MoodalForBoards = ({ onClick, boardId, type }) => {
  return (
    <ModalContent>
      <ButtonCloseModal onClose={onClick} />
      <Title>{type === 'edit' ? 'Edit board' : 'New board'}</Title>
      <FormForBoards boardId={boardId} type={type} onClick={onClick} />
    </ModalContent>
  );
};

MoodalForBoards.propTypes = {
  onClick: PropTypes.func.isRequired,
  boardId: PropTypes.string,
  type: PropTypes.oneOf(['new', 'edit']).isRequired,
};

export default MoodalForBoards;
