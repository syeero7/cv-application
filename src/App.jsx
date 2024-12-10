import { useState } from "react";
import ToggleButton from "./components/ToggleButton.jsx";
import GeneralInformation from "./components/GeneralInformation.jsx";
import Section from "./components/Section.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Education from "./components/Education.jsx";

export default function App() {
  const [isEditMode, setIsEditMode] = useState(true);
  const toggleEditMode = () => setIsEditMode((i) => !i);

  return (
    <main className="cv-app">
      <section className="general-info">
        <ToggleButton isEditMode={isEditMode} onClick={toggleEditMode} />
        <GeneralInformation
          isEditMode={isEditMode}
          data={{ firstName: "", lastName: "", phone: "", email: "" }}
        />
      </section>
      <Section
        className="work-exp"
        title="Work Experience"
        isEditMode={isEditMode}
        data={{ company: "", title: "", workFrom: "", workUntil: "", desc: "" }}
        Component={WorkExperience}
      />
      <Section
        className="edu-exp"
        title="Education"
        isEditMode={isEditMode}
        data={{ school: "", studyTitle: "", studyFrom: "", studyUntil: "" }}
        Component={Education}
      />
    </main>
  );
}
