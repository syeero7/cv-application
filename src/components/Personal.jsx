import FormField from "./FormField";

function Personal({ data, dispatch }) {
  const formAction = (formData) => {
    const payload = Object.fromEntries(formData);

    dispatch({ type: "update-personal", payload });
  };

  return (
    <details name="section" open>
      <summary>
        <strong>Personal Information</strong>
      </summary>

      <form action={formAction} className="personal-form">
        <FormField label="First name" name="firstName" value={data.firstName} />
        <FormField label="Last name" name="lastName" value={data.lastName} />
        <FormField label="Email" name="email" type="email" value={data.email} />
        <FormField label="Phone" name="phone" type="tel" value={data.phone} />

        <button className="submit-btn">Save</button>
      </form>
    </details>
  );
}

export default Personal;
