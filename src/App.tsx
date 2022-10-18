import RateCard from "src/components/rateCard/rateCard";
import ResultCard from "./components/resultCard/resultCard";

import "./App.css";
import { useState } from "react";

enum VIEWS {
  RATE,
  RESULT,
}

function App() {
  const [currentView, setCurrentView] = useState(VIEWS.RATE);
  const [selectedrating, setSelectedrating] = useState(NaN);

  const handleSubmit = () => {
    if (!selectedrating) return;

    setCurrentView(VIEWS.RESULT);
  };

  return (
    <div className="App">
      {VIEWS.RATE === currentView ? (
        <RateCard
          selectedrating={selectedrating}
          setSelectedrating={setSelectedrating}
          onSubmit={handleSubmit}
        />
      ) : (
        <ResultCard selectedRating={selectedrating} />
      )}
    </div>
  );
}

export default App;
