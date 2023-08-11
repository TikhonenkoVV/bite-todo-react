import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sprite from 'img/icons/sprite.svg';
import { Modal } from 'components/Modal/Modal';
import { useEditModal, useModal } from 'hooks/useModal';
import NewBoard from '../../NewBoard/NewBoard';
import EditBoard from '../../NewBoard/EditBoard';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useDispatch, useSelector } from 'react-redux';
import { selectBoardsState } from 'store/boards/selectors';
import { selectColumns } from 'store/columns/selectors';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { deleteBoards, getBoards } from 'store/boards/operations';
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
  ScrollStyled,
} from './ControlBoard.styled';

const ControlBoard = () => {
  const [idActiveBoard, setIdActiveBoard] = useState('');
  const [lengthBoard, setlengthBoard] = useState(0);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { isModalEditOpen, openEditModal, closeEditModal } = useEditModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { boards } = useSelector(selectBoardsState);
  const columns = useSelector(selectColumns);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getBoards());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (boards.length > 0 && boards.length === lengthBoard) {
      return;
    }
    if (boards.length > 0) {
      setIdActiveBoard(boards[0]._id);
      setlengthBoard(boards.length);
    }
  }, [boards, lengthBoard]);

  useEffect(() => {
    if (idActiveBoard && boards.length > 0) {
      const activeBoard = boards.find(board => board._id === idActiveBoard);
      if (activeBoard) {
        const titleActiveBoard = activeBoard.title;
        navigate(`/home/${titleActiveBoard}`, { replace: true });
      }
    }
    if (boards.length === 0) {
      setIdActiveBoard('');
      navigate(`/home`, { replace: true });
    }
  }, [boards, idActiveBoard, navigate]);

  const handleActiveBoard = id => {
    setIdActiveBoard(id);
  };

  const handleDeleteBoard = id => {
    console.log(columns);
    if (!columns.length) {
      dispatch(deleteBoards(id));
    }
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
      <ScrollStyled style={{ width: '100% ', height: 'calc(100% - 575px)' }}>
        <UlStyled>
          {boards.map(board => (
            <LiStyled
              key={board._id}
              onClick={() => handleActiveBoard(board._id, board.title)}
              className={board._id === idActiveBoard && 'active'}
            >
              <DivNameStyled
                className={board._id === idActiveBoard && 'active'}
              >
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
      </ScrollStyled>
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
