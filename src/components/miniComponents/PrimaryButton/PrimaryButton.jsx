import { Button } from './PrimaryButton.styled';

export const PrimaryButton = ({
  type = 'submit',
  action,
  title = 'Send',
  children,
}) => {
  return (
    <Button type={type} onClick={action}>
      {children}
      <p>{title}</p>
    </Button>
  );
};
