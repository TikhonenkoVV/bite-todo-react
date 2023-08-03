import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import StatusFilter from 'components/StatusFilter';

import css from './DashboardHeader.module.css';

const DashboardHeader = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <>
      <div className={css.testDashboard}>
        <div className={css.container}>
          <h2 className={css.dashboardTitle}>Board name</h2>
          <div className={css.dashboardFilter} onClick={openModal}>
            <div className={css.filterIcon}></div>
            <p className={css.filterText}>Fiter</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <StatusFilter onClose={closeModal}></StatusFilter>
        </Modal>
      )}
    </>
  );
};

export default DashboardHeader;
