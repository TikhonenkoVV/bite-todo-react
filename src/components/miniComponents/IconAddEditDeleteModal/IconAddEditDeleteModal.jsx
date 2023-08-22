import sprite from 'img/icons/sprite.svg';
import { StyledDiv } from './IconAddEditDeleteModal.styled';

export const IconAddEditDeleteModal = ({ icon = 'plus' }) => {
  return (
    <StyledDiv>
      <svg
        className="icon"
        width="14"
        height="14"
        aria-hidden="true"
        role="presentation"
      >
        <use xlinkHref={`${sprite}#icon-${icon}`} />
      </svg>
    </StyledDiv>
  );
};
