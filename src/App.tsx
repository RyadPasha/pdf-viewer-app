import React, { useState } from "react";
import PdfViewer from "./components/PdfViewer";
import "./App.css";

const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "ar">("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "ar" : "en"));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>PDF Viewer App</h1>
        <button onClick={toggleLanguage}>
          Switch to {language === "en" ? "Arabic" : "English"}
        </button>
      </header>
      <div className="pdf-viewer-container">
        <PdfViewer fileUrl="/example.pdf" language={language} />
      </div>
    </div>
  );
};

export default App;
