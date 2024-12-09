import { useState } from "react";

export default function Section({
  className,
  title,
  isEditMode,
  data,
  Component,
}) {
  const [state, setState] = useState([{ ...data, id: crypto.randomUUID() }]);

  const handleAdd = () => {
    setState((s) => [...s, { ...data, id: crypto.randomUUID() }]);
  };

  const handleDelete = (e) => {
    const targetId = e.target.dataset.id;
    setState(state.filter((item) => item.id !== targetId));
  };

  return (
    <section className={className}>
      <header>
        <h2>{title}</h2>
        {isEditMode && (
          <button
            className="add-btn btn-bg"
            aria-label={`add ${title.toLowerCase()}`}
            title={`add ${title.toLowerCase()}`}
            onClick={handleAdd}
          ></button>
        )}
      </header>
      <hr />

      <article className={`${className}-container`}>
        {state.map((item) => (
          <Component
            key={item.id}
            data={item}
            isEditMode={isEditMode}
            onClick={handleDelete}
          />
        ))}
      </article>
    </section>
  );
}
