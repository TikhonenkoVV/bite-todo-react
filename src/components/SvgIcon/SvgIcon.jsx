import { Icon } from './SvgIcon.styled';

export const Svg = ({ w, h, use }) => {
  return (
    <Icon width={w} height={h}>
      <use href={use} />
    </Icon>
  );
};
