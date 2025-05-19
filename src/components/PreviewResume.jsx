import "../styles/PreviewResume.css";

function PreviewResume({ personal, education, experience }) {
  return (
    <main className="preview">
      <header>
        <h1>
          {personal.firstName} {personal.lastName}
        </h1>
        <address>
          <span aria-label="email" className="info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" />
            </svg>
            <span>{personal.email}</span>
          </span>

          <span aria-label="phone" className="info">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
              <path d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z" />
            </svg>
            <span>{personal.phone}</span>
          </span>
        </address>
      </header>

      <section className="education">
        <div className="section-header">
          <h2>Education</h2>
        </div>

        {education.length > 0 && (
          <ul>
            {education.map(({ id, school, title, start, end }) => (
              <li key={id} className="list-item">
                <YearDuration start={start} end={end} />

                <article>
                  <h3>{title}</h3>
                  <p>{school}</p>
                </article>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="experience">
        <div className="section-header">
          <h2>Experience</h2>
        </div>

        {experience.length > 0 && (
          <ul>
            {experience.map(
              ({ id, company, position, start, end, responsibilities }) => (
                <li key={id} className="list-item">
                  <YearDuration start={start} end={end} />

                  <article>
                    <h3>{position}</h3>
                    <p>{company}</p>
                    <p>{responsibilities}</p>
                  </article>
                </li>
              )
            )}
          </ul>
        )}
      </section>
    </main>
  );
}

function YearDuration({ start, end }) {
  const date = new Date();

  return (
    <p className="year-duration">
      &#40; <time datetime={start}>{start}</time> -{" "}
      <time dateTime={end}>{date.getFullYear() === end ? "present" : end}</time>{" "}
      &#41;
    </p>
  );
}

export default PreviewResume;
