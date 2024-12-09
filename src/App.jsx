import { useState } from "react";
import ToggleButton from "./components/ToggleButton.jsx";
import GeneralInformation from "./components/GeneralInformation.jsx";

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
    </main>
  );
}
