import { useState } from "react";
import FormField from "./FormField";

function Education({ data, dispatch }) {
  const [formState, setFormState] = useState({ state: "normal", id: null });

  const formAction = (formData) => {
    const payload = Object.fromEntries(formData);

    dispatch({
      type: `${formState.state}-education`,
      id: formState.id,
      payload,
    });
    setFormState({ state: "normal", id: null });
  };

  const selectedSchool =
    formState.state !== "edit"
      ? undefined
      : data.find((school) => school.id === id);

  return (
    <details>
      <summary>
        <strong>Education</strong>
      </summary>

      {formState.state !== "normal" ? (
        <form action={formAction}>
          <FormField
            label="School name"
            name="name"
            value={selectedSchool?.name}
          />
          <FormField
            label="Title of study"
            name="title"
            value={selectedSchool?.title}
          />

          <div>
            <FormField
              label="Start date"
              name="start"
              type="date"
              value={selectedSchool?.start}
            />
            <FormField
              label="End date"
              name="end"
              type="date"
              value={selectedSchool?.end}
            />
          </div>

          <button>{formState.state}</button>
        </form>
      ) : (
        <ul>
          {data.length > 0 &&
            data.map(({ name, id }) => (
              <li key={id}>
                <p>{name}</p>

                <button
                  aria-label="edit"
                  onClick={() => setFormState({ state: "edit", id })}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960">
                    <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                  </svg>
                </button>

                <button
                  aria-label="delete"
                  onClick={() => dispatch({ type: "delete-education", id })}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 -960 960 960">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                  </svg>
                </button>
              </li>
            ))}

          <li>
            <button onClick={() => setFormState({ state: "add", id: null })}>
              + Education
            </button>
          </li>
        </ul>
      )}
    </details>
  );
}

export default Education;
