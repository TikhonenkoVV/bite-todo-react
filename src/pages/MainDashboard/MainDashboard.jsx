import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { ColumnForm } from '../../components/MainDashboard/ColumnForm';
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
  ContentHolder,
  ContentWrapper,
  TrackHorizontal,
  ThumbHorizontal,
} from './MainDashboard.styled';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';
import { selectBoardsState } from 'store/boards/selectors';
import { selectColumns } from 'store/columns/selectors';
import { Scrollbars } from 'react-custom-scrollbars-2';

const MainDashboard = () => {
  const { boardName } = useParams();
  const { isModalOpen, closeModal, openModal } = useModal();
  const { boards } = useSelector(selectBoardsState);
  const selectedBoard = boardName
    ? boards.find(board => board.title === boardName.trim())
    : null;

  const columns = useSelector(selectColumns);
  const hasCards = columns.some(column => column.cards.length > 0);

  return (
    <MainDashboardSection background={selectedBoard?.background || 'default'}>
      <DashboardHeader
        name={selectedBoard?.title}
        disabled={!hasCards}
        dashboard={selectedBoard}
      />
      <MainDashboardContainer>
        {boardName ? (
          <>
            <MainDashboardSectionTitle>
              Columns with tasks
            </MainDashboardSectionTitle>
            <ContentHolder>
              <Scrollbars
                hideTracksWhenNotNeeded={true}
                renderTrackHorizontal={({ style, ...props }) => (
                  <TrackHorizontal
                    {...props}
                    style={{
                      ...style,
                    }}
                  />
                )}
                renderThumbHorizontal={({ style, ...props }) => (
                  <ThumbHorizontal
                    {...props}
                    style={{
                      ...style,
                    }}
                  />
                )}
              >
                <ContentWrapper>
                  <ColumnList boardId={selectedBoard?._id} />
                  <MainDashboardAddColumnButton
                    type="button"
                    onClick={openModal}
                  >
                    <MainDashboardIconContainer>
                      <MainDashboardIcon>
                        <use href={`${sprite}#icon-plus`}></use>
                      </MainDashboardIcon>
                    </MainDashboardIconContainer>
                    <div>Add another column</div>
                  </MainDashboardAddColumnButton>
                </ContentWrapper>
              </Scrollbars>
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
    </MainDashboardSection>
  );
};

export default MainDashboard;
