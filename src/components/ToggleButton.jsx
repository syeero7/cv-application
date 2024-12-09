export default function ToggleButton({ isEditMode, onClick }) {
  return (
    <article className="toggle-container">
      <p>Edit Mode: </p>
      <button
        className={`${isEditMode && "active"} toggle-btn`}
        onClick={onClick}
        aria-label={`toggle ${!isEditMode ? "on" : "off"} edit mode`}
      >
        {isEditMode ? "ON" : "OFF"}
      </button>
    </article>
  );
}
