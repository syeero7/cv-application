export default function Form({ className, onSubmit, onCancel, children }) {
  return (
    <form className={className} onSubmit={onSubmit}>
      <div className="container">{children}</div>
      <div className="btn-container">
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <button
          type="button"
          className="cancel-btn"
          onClick={() => onCancel("close")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
