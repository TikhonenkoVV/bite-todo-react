import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledButton } from './ButtonIcon.styled';

export const ButtonIcon = ({ action, w, h, icon, style }) => {
  return (
    <StyledButton type="button" onClick={action} style={style}>
      <Svg w={w} h={h} icon={icon} />
    </StyledButton>
  );
};
