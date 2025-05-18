import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

function EditResume({ data, dispatch }) {
  return (
    <main>
      <Personal data={data.personal} dispatch={dispatch} />
      <Education data={data.education} dispatch={dispatch} />
      <Experience data={data.experience} dispatch={dispatch} />
    </main>
  );
}

export default EditResume;
