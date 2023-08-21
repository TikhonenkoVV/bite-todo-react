import { Button } from './PrimaryButton.styled';

export const PrimaryButton = ({
  type = 'submit',
  action,
  title = 'Add',
  children,
}) => {
  return (
    <Button type={type} onClick={action}>
      {children}
      <p>{title}</p>
    </Button>
  );
};
