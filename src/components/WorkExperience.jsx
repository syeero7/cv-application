import { useState } from "react";
import Form from "./Form.jsx";
import Buttons from "./Buttons.jsx";
import { getInputValue, getCurrentYear } from "../util/common.js";
import "../styles/WorkExperience.css";

export default function WorkExperience({ isEditMode, data, onClick }) {
  const [state, setState] = useState({ ...data, formStatus: "open" });

  const setFormStatus = (status) => {
    setState((s) => ({ ...s, formStatus: status }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      company: getInputValue(e.target, "company-name"),
      title: getInputValue(e.target, "position-title"),
      workForm: getInputValue(e.target, "work-from"),
      workUntil: getInputValue(e.target, "work-until"),
      desc: getInputValue(e.target, "desc"),
      id: e.target.dataset.id,
      formStatus: "close",
    });
  };

  if (state.formStatus === "open" && isEditMode)
    return (
      <Form
        className="work-exp-form"
        onSubmit={handleSubmit}
        onCancel={setFormStatus}
        dataId={state.id}
      >
        <input
          type="text"
          aria-label="company name"
          placeholder="Company name"
          data-company-name=""
          defaultValue={state.company}
        />
        <input
          type="text"
          aria-label="position title"
          placeholder="Position title"
          data-position-title=""
          defaultValue={state.title}
        />
        <p>
          <span>Worked</span>
          <label>
            <span> from </span>
            <input
              type="number"
              max={getCurrentYear()}
              min="1900"
              data-work-from=""
              defaultValue={!state.workForm ? getCurrentYear() : state.workForm}
            />
          </label>
          <label>
            <span> until </span>
            <input
              type="number"
              min="1900"
              max={getCurrentYear()}
              data-work-until=""
              defaultValue={
                !state.workUntil ? getCurrentYear() : state.workUntil
              }
            />
          </label>
        </p>
        <textarea
          aria-label="main responsibilities of the job"
          placeholder="Main responsibilities of the job"
          data-desc=""
          defaultValue={state.desc}
        ></textarea>
      </Form>
    );

  return (
    <article className={`${isEditMode ? "edit-mode" : ""} content`}>
      <h3>{state.company}</h3>
      <p>{state.title}</p>
      <p className="work-date">
        {`( ${state.workForm} - ${
          state.workUntil === getCurrentYear() ? "Present" : state.workUntil
        } )`}
      </p>
      <p>{state.desc}</p>
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
