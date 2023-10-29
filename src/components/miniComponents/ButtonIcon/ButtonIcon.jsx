import { Svg } from 'components/SvgIcon/SvgIcon';
import { StyledButton } from './ButtonIcon.styled';

export const ButtonIcon = ({
  action,
  w = 18,
  h = 18,
  icon = 'x-close',
  style,
  ariaLabel,
}) => {
  return (
    <StyledButton
      aria-label={ariaLabel}
      type="button"
      onClick={action}
      style={style}
    >
      <Svg w={w} h={h} icon={icon} />
    </StyledButton>
  );
};
