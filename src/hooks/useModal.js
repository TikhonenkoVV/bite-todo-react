import { useState, useEffect } from 'react';

export const useModal = (initialState = false) => {
  const [isModalOpen, setIsModalOpen] = useState(initialState);
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isModalOpen]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return { isModalOpen, openModal, closeModal };
};
