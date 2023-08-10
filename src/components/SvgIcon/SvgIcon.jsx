import { Icon } from './SvgIcon.styled';

export const Svg = ({ w, h, use, styles }) => {
  return (
    <Icon width={w} height={h} styles={styles}>
      <use href={use} />
    </Icon>
  );
};
