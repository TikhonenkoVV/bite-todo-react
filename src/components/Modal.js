import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';


const modalRoot = document.querySelector('#modal-root');

export const Modal =({ onClose, children }) =>{
    
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        zIndex: 2,
      }}
      onClick={handleBackdropClick}
    >
      <div
        style={{
          maxWidth: 'calc(100vw - 48px)',
          maxHeight: 'calc(100vh - 24px)',
        }}
      >
        {children}
      </div>
    </div>,
    modalRoot
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
