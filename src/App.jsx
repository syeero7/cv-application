import { useState } from "react";
import ToggleButton from "./components/ToggleButton.jsx";

export default function App() {
  const [isEditMode, setIsEditMode] = useState(false);
  const toggleEditMode = () => setIsEditMode((i) => !i);

  return (
    <main className="cv-app">
      <section className="general-info">
        <ToggleButton isEditMode={isEditMode} onClick={toggleEditMode} />
      </section>
    </main>
  );
}
