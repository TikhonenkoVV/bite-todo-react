import { useModal } from 'hooks/useModal';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import StatusFilter from 'components/StatusFilter';
import sprite from '../../img/icons/sprite.svg';

import {
  DashboardHeaderFilter,
  DashboardHeaderIcon,
  DashboardHeaderText,
  DashboardHeaderTitle,
} from './DashboardHeader.styled';

const DashboardHeader = ({ name, theme = 'dark' }) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const path = '#icon-filter';
  return (
    <>
      {name && (
        <DashboardHeaderTitle theme={theme}>{name}</DashboardHeaderTitle>
      )}

      <DashboardHeaderFilter type="button" theme={theme} onClick={openModal}>
        <DashboardHeaderIcon>
          <use href={`${sprite}${path}`}></use>
        </DashboardHeaderIcon>
        <DashboardHeaderText>Filters</DashboardHeaderText>
      </DashboardHeaderFilter>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <StatusFilter theme={theme} onClose={closeModal}></StatusFilter>
        </Modal>
      )}
    </>
  );
};

DashboardHeader.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string.isRequired,
};

export default DashboardHeader;
