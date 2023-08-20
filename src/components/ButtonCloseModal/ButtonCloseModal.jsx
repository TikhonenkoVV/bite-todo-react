import sprite from 'img/icons/sprite.svg';
import { CloseButton } from './ButtonCloseModal.styled';

export const ButtonCloseModal = ({ onClose }) => {
  return (
    <CloseButton type="button" onClick={onClose}>
      <svg width={18} height={18} aria-hidden="true" role="presentation">
        <use href={`${sprite}#icon-x-close`}></use>
      </svg>
    </CloseButton>
  );
};
