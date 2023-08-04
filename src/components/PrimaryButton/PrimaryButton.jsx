import { Button } from './PrimaryButton.styled';

export const PrimaryButton = ({ type, styles, children, action, ...otherProps }) => {
  return (
    <Button type={type} styles={styles} onClick={action}>
      {children}
    </Button>
  );
};
