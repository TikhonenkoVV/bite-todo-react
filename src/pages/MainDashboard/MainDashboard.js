import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { ColumnForm } from '../../components/MainDashboard';
import {
  MainDashboardContainer,
  MainDashboardSection,
  MainDashboardSectionTitle,
} from './MainDashboard.styled';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';

const MainDashboard = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <main>
      {/* <MainDashboardSection>
        <MainDashboardContainer>
          <DashboardHeader />
        </MainDashboardContainer>
      </MainDashboardSection> */}
      <MainDashboardSection>
        <MainDashboardContainer>
          <MainDashboardSectionTitle>
            Columns with tasks
          </MainDashboardSectionTitle>
          <button type="button" onClick={openModal}>
            Add another column
          </button>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <ColumnForm />
            </Modal>
          )}
        </MainDashboardContainer>
      </MainDashboardSection>
    </main>
  );
};

export default MainDashboard;
