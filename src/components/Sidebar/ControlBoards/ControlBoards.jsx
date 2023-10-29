import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useModal } from 'hooks/useModal';
import { selectBoardsState } from 'store/boards/selectors';
import { selectIsLoggedIn } from 'store/auth/selectors';
import { getBoards } from 'store/boards/operations';

import { Modal } from 'components/Modal/Modal';
import MoodalForBoards from 'components/ModalForBoards/ModalForBoards';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { Loader } from 'components/Loader/Loader';
import {
  ButtonStyled,
  DivStyled,
  H2styled,
  PStyled,
  UlStyled,
  TrackVertical,
} from './ControlBoards.styled';
import Scrollbars from 'react-custom-scrollbars-2';
import { Notify } from 'notiflix';
import { Board } from '../Board/Board';
import { useNavigate } from 'react-router-dom';
import { setStatusFilter } from 'store/filter/filterSlice';
import { statusFilters } from 'store/filter/constants';

export const ControlBoards = () => {
  const [idActiveBoard, setIdActiveBoard] = useState('');
  const [lengthBoard, setLengthBoard] = useState(0);

  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { boards, isLoading, error } = useSelector(selectBoardsState);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getBoards());
    }
  }, [dispatch, isLoggedIn]);

  useEffect(() => {
    if (boards.length > 1 && boards.length === lengthBoard) {
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
        dispatch(setStatusFilter(statusFilters.all));
      }
    }
    if (boards.length === 0) {
      setIdActiveBoard('');
      navigate(`/home`, { replace: true });
    }
  }, [boards, idActiveBoard, navigate, dispatch]);

  if (error) {
    Notify.warning(error);
  }

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
          <ButtonStyled
            aria-label="add new board"
            type="button"
            onClick={openModal}
          >
            <Svg w={20} h={20} icon="plus" />
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
              <Board
                key={board._id}
                board={board}
                idActiveBoard={idActiveBoard}
                changeIdActiveBoard={id => setIdActiveBoard(id)}
                changeLengthBoard={length => setLengthBoard(length)}
              />
            ))}
          </UlStyled>
        </Scrollbars>
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <MoodalForBoards onClick={closeModal} type={'new'} />
          </Modal>
        )}
      </>
    );
  }
};
