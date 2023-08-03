import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import StatusFilter from 'components/StatusFilter';

import {
  TestDashboard,
  DashboardHeaderFilter,
  DashboardHeaderIcon,
  DashboardHeaderText,
  DashboardHeaderTitle,
} from './DashboardHeader.styled';

const DashboardHeader = ({ name = 'Test dashboard' }) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <>
      <TestDashboard>
        <DashboardHeaderTitle>{name}</DashboardHeaderTitle>

        <DashboardHeaderFilter onClick={openModal}>
          <DashboardHeaderIcon />
          <DashboardHeaderText>Filters</DashboardHeaderText>
        </DashboardHeaderFilter>
      </TestDashboard>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <StatusFilter onClose={closeModal}></StatusFilter>
        </Modal>
      )}
    </>
  );
};

export default DashboardHeader;
