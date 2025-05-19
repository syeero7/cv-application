function FormField({ label, name, value, type = "text" }) {
  const isYearInput = type === "number" && (name === "start" || name === "end");
  let currentYear;

  if (isYearInput) {
    const date = new Date();
    currentYear = date.getFullYear();
  }

  return (
    <label className="form-field">
      <span>{label}</span>
      <input
        required
        type={type}
        name={name}
        defaultValue={isYearInput ? value || currentYear : value}
        max={isYearInput ? currentYear : undefined}
        min={isYearInput ? 1900 : undefined}
        onChange={
          type === "tel"
            ? (e) => e.target.value.replace(/[^0-9]/g, "")
            : undefined
        }
      />
    </label>
  );
}

export default FormField;
