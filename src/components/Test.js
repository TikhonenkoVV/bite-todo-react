import NewBoard from './NewBoard/NewBoard'

export default function Test({ onClose }) {
  return (
    <>
      <NewBoard />;
      <button type="button" onClick={onClose}>
        Close Modal
      </button>
    </>
  );
}
