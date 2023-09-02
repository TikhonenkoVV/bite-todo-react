import { StyledDiv } from './IconAddEditDeleteModal.styled';
import { Svg } from 'components/SvgIcon/SvgIcon';

export const IconAddEditDeleteModal = ({ icon = 'plus', style }) => {
  return (
    <StyledDiv>
      <Svg w={14} h={14} icon={icon} style={style} />
    </StyledDiv>
  );
};
