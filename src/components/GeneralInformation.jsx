import { useState } from "react";
import Form from "./Form.jsx";
import { getInputValue } from "../util/common.js";

export default function GeneralInformation({ isEditMode, data }) {
  const [state, setState] = useState({ ...data, formStatus: "open" });

  const setFormStatus = (status) => {
    setState((s) => ({ ...s, formStatus: status }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setState({
      firstName: getInputValue(e.target, "first-name"),
      lastName: getInputValue(e.target, "last-name"),
      phone: getInputValue(e.target, "phone"),
      email: getInputValue(e.target, "email"),
      formStatus: "close",
    });
  };

  if (state.formStatus === "open")
    return (
      <Form
        className="general-info-form"
        onSubmit={handleSubmit}
        onCancel={setFormStatus}
      >
        <input
          type="text"
          data-first-name
          aria-label="first name"
          placeholder="First name"
          defaultValue={state.firstName}
        />
        <input
          type="text"
          data-last-name
          aria-label="last name"
          placeholder="Last name"
          defaultValue={state.lastName}
        />
        <input
          type="tel"
          data-phone
          aria-label="phone number"
          placeholder="Phone number"
          defaultValue={state.phone}
        />
        <input
          type="email"
          data-email
          aria-label="email"
          placeholder="Email"
          defaultValue={state.email}
        />
      </Form>
    );

  return (
    <article>
      <h1>
        {state.firstName} {state.lastName}
      </h1>
      <hr />
      <p>
        {state.phone} {state.email}
      </p>
      {isEditMode && (
        <button
          aria-label="edit"
          className="btn-bg edit-btn"
          onClick={() => setFormStatus("open")}
        ></button>
      )}
    </article>
  );
}
