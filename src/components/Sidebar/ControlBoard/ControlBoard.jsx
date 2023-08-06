import { useEffect, useState } from 'react';
import sprite from 'img/icons/sprite.svg';
import { Modal } from 'components/Modal/Modal';
import { useEditModal, useModal } from 'hooks/useModal';
import NewBoard from '../../NewBoard/NewBoard';
import EditBoard from '../../NewBoard/EditBoard';
import {
  ButtonStyled,
  DivIconStyled,
  DivNameStyled,
  DivStyled,
  H2styled,
  PStyled,
  LiStyled,
  TextStyled,
  UlStyled,
} from './ControlBoard.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoards } from 'store/boards/selectors';
import { getBoards } from 'store/boards/operations';

const ControlBoard = () => {
  const [idActiveBoard, setActiveBoard] = useState('');
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isModalEditOpen, openEditModal, closeEditModal } = useEditModal();

  const dispatch = useDispatch();

  const boards = useSelector(selectBoards);

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  const handleActiveBoard = id => {
    setActiveBoard(id);
  };

  return (
    <>
      <H2styled>My boards</H2styled>
      <DivStyled>
        <PStyled>Create a new board</PStyled>
        <ButtonStyled type="button" onClick={openModal}>
          <Svg w={18} h={18} use={`${sprite}#icon-plus`} />
        </ButtonStyled>
      </DivStyled>
      <UlStyled>
        {boards.map(board => (
          <LiStyled
            key={board._id}
            onClick={() => handleActiveBoard(board._id)}
            className={board._id === idActiveBoard && 'active'}
          >
            <DivNameStyled className={board._id === idActiveBoard && 'active'}>
              <Svg w={18} h={18} use={`${sprite}#${board.dashboardIcon}`} />
              <TextStyled className={board._id === idActiveBoard && 'active'}>
                {board.title}
              </TextStyled>
            </DivNameStyled>
            {idActiveBoard === board._id && (
              <DivIconStyled>
                <button type="button" onClick={openEditModal}>
                  <Svg w={16} h={16} use={`${sprite}#icon-pencil`} />
                </button>
                <button type="button">
                  <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
                </button>
              </DivIconStyled>
            )}
          </LiStyled>
        ))}
      </UlStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewBoard onClick={closeModal} />
        </Modal>
      )}
      {isModalEditOpen && (
        <Modal onClose={closeEditModal}>
          <EditBoard onClick={closeEditModal} id={idActiveBoard} />
        </Modal>
      )}
    </>
  );
};

export default ControlBoard;
