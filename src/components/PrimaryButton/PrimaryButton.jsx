import { Button } from './PrimaryButton.styled';

export const PrimaryButton = ({
  type,
  styles,
  action,
  children,
  ...otherProps
}) => {
  return (
    <Button type={type} onClick={action} styles={styles}>
      {children}
    </Button>
  );
};
