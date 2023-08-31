// import sprite from 'img/icons/sprite.svg';
import { CloseButton } from './ButtonCloseModal.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const ButtonCloseModal = ({ onClose }) => {
  return (
    <CloseButton type="button" onClick={onClose}>
      <Svg w={18} h={18} icon={'x-close'} />
      {/* <svg width={18} height={18} aria-hidden="true" role="presentation">
        <use href={`${sprite}#icon-x-close`}></use>
      </svg> */}
    </CloseButton>
  );
};
