import { useModal } from 'hooks/useModal';
import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import StatusFilter from 'components/StatusFilter';
import sprite from '../../img/icons/sprite.svg';

import {
  TestDashboard,
  DashboardHeaderFilter,
  DashboardHeaderIcon,
  DashboardHeaderText,
  DashboardHeaderTitle,
} from './DashboardHeader.styled';

const DashboardHeader = ({ name }) => {
  const { isModalOpen, closeModal, openModal } = useModal();
  const path = '#icon-filter';
  return (
    <>
      <TestDashboard>
        {name && <DashboardHeaderTitle>{name}</DashboardHeaderTitle>}

        <DashboardHeaderFilter type="button" onClick={openModal}>
          <DashboardHeaderIcon>
            <use href={`${sprite}${path}`}></use>
          </DashboardHeaderIcon>
          <DashboardHeaderText>Filters</DashboardHeaderText>
        </DashboardHeaderFilter>
      </TestDashboard>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <StatusFilter onClose={closeModal}></StatusFilter>
        </Modal>
      )}
    </>
  );
};

DashboardHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DashboardHeader;
