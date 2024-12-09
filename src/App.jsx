import { useState } from "react";
import ToggleButton from "./components/ToggleButton.jsx";
import GeneralInformation from "./components/GeneralInformation.jsx";
import Section from "./components/Section.jsx";
import WorkExperience from "./components/WorkExperience.jsx";

export default function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => setIsEditMode((i) => !i);

  return (
    <main className="cv-app">
      <section className="general-info">
        <GeneralInformation
          isEditMode={isEditMode}
          data={{ firstName: "", lastName: "", phone: "", email: "" }}
        />
        <ToggleButton isEditMode={isEditMode} onClick={toggleEditMode} />
      </section>
      <Section
        className="work-exp"
        title="Work Experience"
        isEditMode={isEditMode}
        data={{ company: "", title: "", workForm: "", workUntil: "", desc: "" }}
        Component={WorkExperience}
      />
    </main>
  );
}
