import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import StatusFilter from 'components/StatusFilter';

import {
  TestDashboard,
  DashboardHeaderContainer,
  DashboardHeaderFilter,
  DashboardHeaderIcon,
  DashboardHeaderText,
  DashboardHeaderTitle,
} from './DashboardHeader.styled';

const DashboardHeader = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <>
      <TestDashboard>
        <DashboardHeaderContainer>
          <DashboardHeaderTitle>Board name</DashboardHeaderTitle>

          <DashboardHeaderFilter onClick={openModal}>
            <DashboardHeaderIcon></DashboardHeaderIcon>
            <DashboardHeaderText>Fiter</DashboardHeaderText>
          </DashboardHeaderFilter>
        </DashboardHeaderContainer>
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
