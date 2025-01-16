import { useState } from "react";

import DriverSelection from "../DriverSelection";

// import { getData } from "../../api";
import LoadingOverlay from "../ui/LoadingOverlay";
import ResultsPopup from "../ui/ResultsPopup";
import { useFormSubmit } from "../../hooks/useFormSubmit";

const WithoutLocation = () => {
  const [selectedDrivers, setSelectedDrivers] = useState([]);

  const { handleSubmit, isLoading, results, showResults, closeResults } = useFormSubmit();

  // Driver Selection
  const handleDriverSelect = (driver) => {
    if (driver && !selectedDrivers.includes(driver)) {
      setSelectedDrivers([...selectedDrivers, driver]);
    }
  };

  // Driver Deletion
  const handleDriverDelete = (driver) => {
    setSelectedDrivers(selectedDrivers.filter((selectedDriver) => selectedDriver !== driver));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (selectedDrivers.length < 5) alert("Please select at least 5 drivers");
    console.log("predicting without location");
    handleSubmit({ drivers: selectedDrivers, type: "withOutLocation" });
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Drivers Name and grid*/}
        <div className="mt-6 mb-6">
          <h3 className="text-gray-500 text-sm font-normal mb-2">
            Select Drivers according their Grid Position
          </h3>
          <DriverSelection
            selectedDrivers={selectedDrivers}
            onDriverSelect={handleDriverSelect}
            onDriverDelete={handleDriverDelete}
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 
                   transition-colors font-semibold"
        >
          Predict Race Outcome
        </button>
      </form>
      {isLoading && <LoadingOverlay />}

      <ResultsPopup
        isOpen={showResults}
        onClose={closeResults}
        results={results}
        type="withOutLocation"
      />
    </>
  );
};

export default WithoutLocation;
