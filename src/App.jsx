import { useReducer, useState } from "react";
import EditResume from "./components/EditResume";
import PreviewResume from "./components/PreviewResume";

function App() {
  const [previewOn, setPreviewOn] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
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
  personal: {},
  education: [],
  experience: [],
};

export default App;
