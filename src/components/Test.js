import { PrimaryButton } from './PrimaryButton';

const styles = {
  padding: '14px 130px',
  backgroundColor: '#161616',
  color: '#fff',
  borderRadius: '8px',
};

export default function Test({ onClose }) {
  return (
    <>
      <h1>Hello</h1>
      <PrimaryButton type="button" styles={styles} action={onClose}>
        Close Modal
      </PrimaryButton>
    </>
  );
}
