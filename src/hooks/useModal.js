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

export const useEditModal = (initialState = false) => {
  const [isModalEditOpen, setIsModalEditOpen] = useState(initialState);
  useEffect(() => {
    if (isModalEditOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isModalEditOpen]);
  const openEditModal = () => setIsModalEditOpen(true);
  const closeEditModal = () => setIsModalEditOpen(false);
  return { isModalEditOpen, openEditModal, closeEditModal };
};
