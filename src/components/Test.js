import NewBoard from './NewBoard/NewBoard'

export default function Test({ onClose }) {
  return (
    <>
      <NewBoard onClick={onClose}/>;
      <button type="button" onClick={onClose}>
        Close Modal
      </button>
    </>
  );
}
