import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { selectBoardsState } from 'store/boards/selectors';
import { deleteBoards, getBoards } from 'store/boards/operations';

const ControlBoard = () => {
  const [idActiveBoard, setActiveBoard] = useState('');
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isModalEditOpen, openEditModal, closeEditModal } = useEditModal();
  console.log('count');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { boards, isLoading, error } = useSelector(selectBoardsState);

  useEffect(() => {
    dispatch(getBoards());
  }, [dispatch]);

  const { boards } = useSelector(selectBoardsState);

  useEffect(() => {
    if (idActiveBoard === '' && boards.length > 0) {
      const lastAddBoardName = boards[0].title;
      navigate(`/home/${lastAddBoardName}`, { replace: true });
    }
  }, [boards, idActiveBoard, navigate]);

  const handleActiveBoard = (id, boardName) => {
    navigate(`/home/${boardName}`, { replace: true });
    setActiveBoard(id);
  };

  const handleDeleteBoard = id => {
    dispatch(deleteBoards(id));
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
            onClick={() => handleActiveBoard(board._id, board.title)}
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
                <button
                  type="button"
                  onClick={() => handleDeleteBoard(board._id)}
                >
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
