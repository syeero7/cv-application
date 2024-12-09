export default function Buttons({ onClickEdit, onClickDelete, deleteId }) {
  return (
    <div className="btn-container">
      <button
        aria-label="edit"
        className="edit-btn btn-bg"
        onClick={() => onClickEdit("open")}
      ></button>
      <button
        aria-label="delete"
        data-id={deleteId}
        onClick={onClickDelete}
        className="delete-btn btn-bg"
      ></button>
    </div>
  );
}
