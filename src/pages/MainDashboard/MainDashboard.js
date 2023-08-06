import { useParams } from 'react-router-dom';
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
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';

const MainDashboard = () => {
  const { boardName } = useParams();
  const { isModalOpen, closeModal, openModal } = useModal();

  return (
    <MainDashboardSection>
      <FilterContainer>
        <DashboardHeader name={boardName} theme={'dark'} />
      </FilterContainer>
      <MainDashboardContainer>
        {boardName ? (
          <>
            <MainDashboardSectionTitle>
              Columns with tasks
            </MainDashboardSectionTitle>
            <ContentHolder>
              <ColumnList boardName={boardName} />
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
                <ColumnForm onCloseForm={closeModal} />
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
