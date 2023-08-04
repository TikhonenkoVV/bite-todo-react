import { useModal } from 'hooks/useModal';
import { Modal } from 'components/Modal';
import ColumnForm from '../../components/MainDashboard';
import { Svg } from '../../components/SvgIcon/SvgIcon';
import sprite from '../../img/icons/sprite.svg';
import {
  MainDashboardContainer,
  MainDashboardSection,
  MainDashboardSectionTitle,
  MainDashboardAddColumnButton,
  MainDashboardIconContainer,
  MainDashboardIcon,
} from './MainDashboard.styled';
import DashboardHeader from 'components/DashboardHeader/DashboardHeader';

const MainDashboard = () => {
  const { isModalOpen, closeModal, openModal } = useModal();
  return (
    <main>
      {/* <MainDashboardSection>
        <MainDashboardContainer>
          <DashboardHeader />
        </MainDashboardContainer>
      </MainDashboardSection> */}
      <MainDashboardSection>
        <MainDashboardContainer>
          <MainDashboardSectionTitle>
            Columns with tasks
          </MainDashboardSectionTitle>
          <MainDashboardAddColumnButton type="button" onClick={openModal}>
            {/* <MainDashboardIconHolder>

            </MainDashboardIconHolder> */}

            <MainDashboardIconContainer>
              <MainDashboardIcon>
                <use href={`${sprite}#icon-plus`}></use>
              </MainDashboardIcon>
            </MainDashboardIconContainer>
            <div>Add another column</div>
          </MainDashboardAddColumnButton>
          {isModalOpen && (
            <Modal onClose={closeModal}>
              <ColumnForm />
            </Modal>
          )}
        </MainDashboardContainer>
      </MainDashboardSection>
    </main>
  );
};

export default MainDashboard;
