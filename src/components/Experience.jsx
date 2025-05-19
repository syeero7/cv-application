import { useState } from "react";
import FormField from "./FormField";

function Experience({ data, dispatch }) {
  const [formState, setFormState] = useState({ state: "normal", id: null });

  const formAction = (formData) => {
    const payload = Object.fromEntries(formData);

    dispatch({
      type: `${formState.state}-experience`,
      id: formState.id,
      payload,
    });
    setFormState({ state: "normal", id: null });
  };

  const selectedExperience =
    formState.state !== "edit"
      ? undefined
      : data.find((experience) => experience.id === formState.id);

  return (
    <details name="section">
      <summary>
        <strong>Experience</strong>
      </summary>

      {formState.state !== "normal" ? (
        <form action={formAction}>
          <FormField
            label="Company name"
            name="company"
            value={selectedExperience?.company}
          />
          <FormField
            label="Position title"
            name="position"
            value={selectedExperience?.position}
          />

          <div className="year-inputs">
            <FormField
              label="Start year"
              name="start"
              type="number"
              value={selectedExperience?.start}
            />
            <FormField
              label="End year"
              name="end"
              type="number"
              value={selectedExperience?.end}
            />
          </div>

          <label className="form-field">
            <span>Responsibilities</span>
            <textarea
              name="responsibilities"
              style={{ width: "100%" }}
              defaultValue={selectedExperience?.responsibilities}></textarea>
          </label>

          <div className="form-buttons">
            <button type="submit" className="submit-btn">
              {formState.state}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setFormState({ state: "normal", id: null })}>
              cancel
            </button>
          </div>
        </form>
      ) : (
        <ul className="list">
          {data.length > 0 &&
            data.map(({ company, id }) => (
              <li key={id} className="data-item">
                <p>{company}</p>

                <button
                  aria-label="edit"
                  onClick={() => setFormState({ state: "edit", id })}
                  className="edit-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                  </svg>
                </button>

                <button
                  aria-label="delete"
                  onClick={() => dispatch({ type: "delete-experience", id })}
                  className="delete-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </li>
            ))}

          <li className="add-item">
            <button onClick={() => setFormState({ state: "add", id: null })}>
              + Experience
            </button>
          </li>
        </ul>
      )}
    </details>
  );
}

export default Experience;
