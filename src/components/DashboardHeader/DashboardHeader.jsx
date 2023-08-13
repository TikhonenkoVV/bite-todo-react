import { useModal } from 'hooks/useModal';
import PropTypes from 'prop-types';

import { Modal } from 'components/Modal/Modal';
import StatusFilter from 'components/StatusFilter';
import sprite from '../../img/icons/sprite.svg';
import { Svg } from 'components/SvgIcon/SvgIcon';

import {
  DashboardHeaderFilter,
  DashboardHeaderText,
  DashboardHeaderTitle,
} from './DashboardHeader.styled';

const DashboardHeader = ({ name, disabled }) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const iconName = '#icon-filter';
  return (
    <>
      {name && <DashboardHeaderTitle>{name}</DashboardHeaderTitle>}

      <DashboardHeaderFilter
        type="button"
        onClick={openModal}
        disabled={disabled}
      >
        <Svg w={16} h={16} use={`${sprite}${iconName}`} />
        <DashboardHeaderText>Filters</DashboardHeaderText>
      </DashboardHeaderFilter>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <StatusFilter onClose={closeModal}></StatusFilter>
        </Modal>
      )}
    </>
  );
};

DashboardHeader.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool.isRequired,
};

export default DashboardHeader;
