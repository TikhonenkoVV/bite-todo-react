import hero1x from '../img/welcome-img-1x.png';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import Test from 'components/Test';



const Welcome = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 60,
        color: '#010101',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          fontSize: '14px',
        }}
      >
        <img src={hero1x} alt="hero" />
        <p>
          Supercharge your productivity and take control of your tasks with Task
          Pro - Don't wait, start achieving your goals now!
        </p>
      </div>
      <button
        type="button"
        
        onClick={openModal}
      >
        showModal
      </button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Test onClose={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Welcome;
