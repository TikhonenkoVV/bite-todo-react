import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { ColumnForm } from '../../components/MainDashboard';
import { ColumnList } from '../../components/MainDashboard/ColunmList';
import CreateBoard from '../../components/MainDashboard/CreateBoard';
import sprite from '../../img/icons/sprite.svg';
import {
  MainDashboardContainer,
  MainDashboardSection,
  MainDashboardSectionTitle,
  MainDashboardAddColumnButton,
  MainDashboardIconContainer,
  MainDashboardIcon,
  FilterContainer,
  ContentHolder,
} from './MainDashboard.styled';
// import { Scrollbars } from 'react-custom-scrollbars-2';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
import { selectBoardsState } from 'store/boards/selectors';

const MainDashboard = () => {
  const { boardName } = useParams();
  const { isModalOpen, closeModal, openModal } = useModal();
  const { boards } = useSelector(selectBoardsState);
  const selectedBoard = boardName
    ? boards.find(board => board.title === boardName.trim())
    : null;

  return (
    <MainDashboardSection>
      <FilterContainer>
        <DashboardHeader name={selectedBoard?.title} theme={'dark'} />
      </FilterContainer>
      {/* <Scrollbars style={{ width: '100%', height: '100%' }}> */}
      <MainDashboardContainer>
        {boardName ? (
          <>
            <MainDashboardSectionTitle>
              Columns with tasks
            </MainDashboardSectionTitle>
            <ContentHolder>
              <ColumnList boardId={selectedBoard?._id} />
              <MainDashboardAddColumnButton type="button" onClick={openModal}>
                <MainDashboardIconContainer>
                  <MainDashboardIcon>
                    <use href={`${sprite}#icon-plus`}></use>
                  </MainDashboardIcon>
                </MainDashboardIconContainer>
                <div>Add another column</div>
              </MainDashboardAddColumnButton>
            </ContentHolder>
            {isModalOpen && (
              <Modal onClose={closeModal}>
                <ColumnForm
                  onCloseForm={closeModal}
                  boardId={selectedBoard?._id}
                />
              </Modal>
            )}
          </>
        ) : (
          <CreateBoard />
        )}
      </MainDashboardContainer>
      {/* </Scrollbars> */}
    </MainDashboardSection>
  );
};

export default MainDashboard;
