import { useState } from "react";
import { Flag, ChevronDown } from "lucide-react";
import LoadingOverlay from "../ui/LoadingOverlay";
import ResultsPopup from "../ui/ResultsPopup";
import { useFormSubmit } from "../../hooks/useFormSubmit";
import DriverSelection from "../DriverSelection";
import { tracks } from "../../assets/data/driver";

const WithLocation = () => {
  const [track, setTrack] = useState("");

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
    if (track.trim() === "") return;
    if (selectedDrivers.length < 5) alert("Please select at least 5 drivers");
    console.log("predicting without location");
    handleSubmit({ drivers: selectedDrivers, location: track, type: "withLocation" });
  };

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        {/* Locations */}
        <div className="relative flex items-center  mb-6">
          <div className="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
            <Flag size={20} />
          </div>

          <select
            onChange={(e) => setTrack(e.target.value)}
            value={track}
            className="w-full pl-12 pr-10 py-3 bg-white/10 border border-gray-200/20 rounded-lg 
                     text-white appearance-none cursor-pointer backdrop-blur-sm
                     focus:outline-none focus:border-red-500 transition-colors"
          >
            <option value="" disabled className="text-gray-400">
              select Location
            </option>
            {tracks.map((track, index) => (
              <option key={index.toString()} value={track} className="bg-gray-900 text-white">
                {track}
              </option>
            ))}
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={20}
          />
        </div>

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

        {/* Submit button */}
        <button
          type="submit"
          className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 
                   transition-colors font-semibold mt-4"
        >
          Predict Race Outcome
        </button>
      </form>
      {isLoading && <LoadingOverlay />}

      <ResultsPopup
        isOpen={showResults}
        onClose={closeResults}
        results={results}
        type="withLocation"
      />
    </>
  );
};

export default WithLocation;
