import {
  ButtonStyled,
  CodeStyled,
  DivStyled,
  PNeedHelpStyled,
  PStyled,
} from './NeedHelp.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';
import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import { FormNeedHelp } from '../FormNeedHelp/FormNeedHelp';

const NeedHelp = () => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <DivStyled>
      <PStyled>
        If you need help with <CodeStyled>TaskPro</CodeStyled>, check out our
        support resources or reach out to our customer support team.
      </PStyled>
      <ButtonStyled type="button" onClick={openModal}>
        <Svg w={20} h={20} icon='help-circle' />
        <PNeedHelpStyled>Need help?</PNeedHelpStyled>
      </ButtonStyled>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <FormNeedHelp closeModal={closeModal} />
        </Modal>
      )}
    </DivStyled>
  );
};

export default NeedHelp;
