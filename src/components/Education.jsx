import { useState } from "react";
import Form from "./Form.jsx";
import Buttons from "./Buttons.jsx";
import { getCurrentYear, getInputValue } from "../util/common.js";
import "../styles/Education.css";

export default function Education({ isEditMode, data, onClick }) {
  const [state, setState] = useState({ ...data, formStatus: "open" });

  const setFormStatus = (status) => {
    setState((s) => ({ ...s, formStatus: status }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      school: getInputValue(e.target, "school"),
      studyTitle: getInputValue(e.target, "study-title"),
      studyFrom: getInputValue(e.target, "study-from"),
      studyUntil: getInputValue(e.target, "study-until"),
      id: e.target.dataset.id,
      formStatus: "close",
    });
  };

  if (state.formStatus === "open" && isEditMode)
    return (
      <Form
        className="education-form"
        onSubmit={handleSubmit}
        onCancel={setFormStatus}
        dataId={state.id}
      >
        <input
          type="text"
          placeholder="School name"
          aria-label="school name"
          data-school=""
          defaultValue={state.school}
        />
        <input
          type="text"
          placeholder="Title of study"
          aria-label="title of study"
          data-study-title=""
          defaultValue={state.studyTitle}
        />
        <p>
          <span>Studied</span>
          <label>
            <span> from </span>
            <input
              type="number"
              min="1900"
              max={getCurrentYear()}
              data-study-from=""
              defaultValue={
                !state.studyFrom ? getCurrentYear() : state.studyFrom
              }
            />
          </label>
          <label>
            <span> until </span>
            <input
              type="number"
              min="1900"
              max={getCurrentYear()}
              data-study-until=""
              defaultValue={
                !state.studyUntil ? getCurrentYear() : state.studyUntil
              }
            />
          </label>
        </p>
      </Form>
    );

  return (
    <article className={`${isEditMode ? "edit-mode" : ""} content`}>
      <h3>{state.studyTitle}</h3>
      <p>{state.school}</p>
      <p className="study-date">
        {`( ${state.studyFrom} - ${
          state.studyUntil === getCurrentYear() ? "Present" : state.studyUntil
        } )`}
      </p>
      {isEditMode && (
        <Buttons
          onClickEdit={setFormStatus}
          onClickDelete={onClick}
          deleteId={state.id}
        />
      )}
    </article>
  );
}
