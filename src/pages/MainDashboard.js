import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { ColumnForm } from '../components/MainDashboard';

const MainDashboard = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <div>
      <button type="button" onClick={openModal}>
        Add another column
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ColumnForm />
        </Modal>
      )}
    </div>
  );
};

export default MainDashboard;
