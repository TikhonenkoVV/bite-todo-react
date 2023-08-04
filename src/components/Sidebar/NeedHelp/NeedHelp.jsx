import {
  ButtonStyled,
  CodeStyled,
  DivStyled,
  PNeedHelpStyled,
  PStyled,
} from './NeedHelp.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import sprite from 'img/icons/sprite.svg';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import NewBoard from 'components/NewBoard/NewBoard';

const NeedHelp = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <DivStyled>
      <PStyled>
        If you need help with <CodeStyled>TaskPro</CodeStyled>, check out our
        support resources or reach out to our customer support team.
      </PStyled>
      <ButtonStyled type="button" onClick={openModal}>
        <Svg w={20} h={20} use={`${sprite}#icon-help-circle`} />
        <PNeedHelpStyled>Need help?</PNeedHelpStyled>
      </ButtonStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <NewBoard onClick={closeModal} />
        </Modal>
      )}
    </DivStyled>
  );
};

export default NeedHelp;
