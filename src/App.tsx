import { useState } from "react";

import RateCard from "src/components/rateCard/rateCard";
import ResultCard from "./components/resultCard/resultCard";

import "./App.css";

function App() {
  const [isSubmeted, setIsSubmeted] = useState(false);
  const [selectedrating, setSelectedrating] = useState(NaN);

  const handleSubmit = () => {
    if (!selectedrating) return;

    setIsSubmeted(true);
  };

  return (
    <div className="App">
      {!isSubmeted ? (
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
