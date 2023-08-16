import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useEditModal, useModal } from 'hooks/useModal';
import { selectBoardsState } from 'store/boards/selectors';
import { selectColumns } from 'store/columns/selectors';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { deleteBoards, getBoards } from 'store/boards/operations';

import { Modal } from 'components/Modal/Modal';
import NewBoard from 'components/NewBoard/NewBoard';
import EditBoard from 'components/NewBoard/EditBoard';
import sprite from 'img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { Loader } from 'components/Loader/Loader';
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
  ButtonEdit,
  ButtonDelete,
  TrackVertical,
} from './ControlBoard.styled';
import Scrollbars from 'react-custom-scrollbars-2';
import { Notify } from 'notiflix';

const ControlBoard = () => {
  const [idActiveBoard, setIdActiveBoard] = useState('');
  const [lengthBoard, setLengthBoard] = useState(null);

  const { isModalOpen, openModal, closeModal } = useModal();
  const { isModalEditOpen, openEditModal, closeEditModal } = useEditModal();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { boards, isLoading, error } = useSelector(selectBoardsState);
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
      setLengthBoard(boards.length);
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

  if (error) {
    Notify.warning(error);
  }

  const handleActiveBoard = id => {
    setIdActiveBoard(id);
  };

  const handleDeleteBoard = id => {
    if (!columns.length) {
      dispatch(deleteBoards(id));
      setLengthBoard(null);
      return;
    }

    Notify.warning(
      'It is impossible to remove board when exists one or more columns'
    );
  };

  const media = window.innerWidth;
  const scrollHeight =
    media > 767 ? 'calc(100% - 590px)' : 'calc(100% - 560px)';

  if (isLoading) {
    return <Loader fill={'#fff'} />;
  }
  if (!isLoading) {
    return (
      <>
        <H2styled>My boards</H2styled>
        <DivStyled>
          <PStyled>Create a new board</PStyled>
          <ButtonStyled type="button" onClick={openModal}>
            <Svg w={18} h={18} use={`${sprite}#icon-plus`} />
          </ButtonStyled>
        </DivStyled>
        <Scrollbars
          style={{
            width: '100% ',
            height: scrollHeight,
          }}
          renderTrackVertical={({ style, ...props }) => (
            <TrackVertical
              {...props}
              style={{
                ...style,
              }}
            />
          )}
        >
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
                  <TextStyled
                    className={board._id === idActiveBoard && 'active'}
                  >
                    {board.title}
                  </TextStyled>
                </DivNameStyled>
                {idActiveBoard === board._id && (
                  <DivIconStyled>
                    <ButtonEdit type="button" onClick={openEditModal}>
                      <Svg w={16} h={16} use={`${sprite}#icon-pencil`} />
                    </ButtonEdit>
                    <ButtonDelete
                      type="button"
                      onClick={() => handleDeleteBoard(board._id)}
                    >
                      <Svg w={16} h={16} use={`${sprite}#icon-trash`} />
                    </ButtonDelete>
                  </DivIconStyled>
                )}
              </LiStyled>
            ))}
          </UlStyled>
        </Scrollbars>
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
  }
};

export default ControlBoard;
