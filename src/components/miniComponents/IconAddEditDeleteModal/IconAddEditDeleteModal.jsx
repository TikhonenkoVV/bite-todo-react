import sprite from 'img/icons/sprite.svg';
import { StyledDiv } from './IconAddEditDeleteModal.styled';

export const ButtonAddEditDeleteModal = ({ onClose }) => {
  return (
    <StyledDiv>
    <svg
      className="icon"
      width="14"
      height="14"
      aria-hidden="true"
      role="presentation"
    >
      <use xlinkHref={`${sprite}#icon-plus`} />
    </svg>
  </StyledDiv>
  );
};
