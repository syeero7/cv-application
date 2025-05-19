import { useReducer, useState } from "react";
import EditResume from "./components/EditResume";
import PreviewResume from "./components/PreviewResume";

function App() {
  const [previewOn, setPreviewOn] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="toggle-buttons">
        <button
          disabled={!previewOn}
          onClick={() => setPreviewOn((prev) => !prev)}>
          Edit résumé
        </button>
        <button
          disabled={previewOn}
          onClick={() => setPreviewOn((prev) => !prev)}>
          Preview résumé
        </button>
      </div>

      {previewOn ? (
        <PreviewResume {...state} />
      ) : (
        <EditResume data={state} dispatch={dispatch} />
      )}
    </>
  );
}

const reducer = (state, action) => {
  switch (action.type) {
    case "update-personal":
      return { ...state, personal: { ...state.personal, ...action.payload } };

    case "add-education":
      return {
        ...state,
        education: [
          ...state.education,
          { ...action.payload, id: crypto.randomUUID() },
        ],
      };

    case "edit-education":
      return {
        ...state,
        education: state.education.map((education) =>
          education.id === action.id
            ? {
                ...action.payload,
                id: action.id,
              }
            : education
        ),
      };

    case "delete-education":
      return {
        ...state,
        education: state.education.filter(
          (education) => education.id !== action.id
        ),
      };

    case "add-experience":
      return {
        ...state,
        experience: [
          ...state.experience,
          { ...action.payload, id: crypto.randomUUID() },
        ],
      };

    case "edit-experience":
      return {
        ...state,
        experience: state.experience.map((experience) =>
          experience.id === action.id
            ? {
                ...action.payload,
                id: action.id,
              }
            : experience
        ),
      };

    case "delete-experience":
      return {
        ...state,
        experience: state.experience.filter(
          (experience) => experience.id !== action.id
        ),
      };
  }

  throw Error("Unknown action: " + action.type);
};

const initialState = {
  personal: {
    firstName: "Jason",
    lastName: "Miller",
    email: "jasonMil@mail.com",
    phone: "0114753310",
  },
  education: [
    {
      id: crypto.randomUUID(),
      school: "XY High school",
      title: "High School Diploma ",
      start: "2014",
      end: "2016",
    },
    {
      id: crypto.randomUUID(),
      school: "AX University",
      title: "Bachelor of Science in Computer Science",
      start: "2016",
      end: "2020",
    },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      company: "DX Tech",
      position: "Junior Software Engineer",
      start: "2020",
      end: "2022",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, iure totam, mollitia quod dolorem similique iusto saepe architecto asperiores natus ducimus tempore labore, repellat aspernatur temporibus at eum",
    },
    {
      id: crypto.randomUUID(),
      company: "X Enterprises",
      position: "Software Engineer",
      start: "2022",
      end: "2024",
      responsibilities:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae hic numquam voluptatem illum quidem, rerum ea dignissimos laborum beatae dicta in pariatur nobis repellat",
    },
  ],
};

export default App;
