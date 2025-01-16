import { useState, useCallback } from "react";
import { withLocationPrediction, withOutLocationPrediction } from "../api";

export const useFormSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = useCallback(async (formData) => {
    setIsLoading(true);

    try {
      const isWithLocation = formData.type === "withLocation";
      const drivers = formData.drivers;
      // Make different API calls based on form data
      if (isWithLocation) {
        // Call API with location
        const location = formData.location;
        const predictionResults = await withLocationPrediction({ drivers, location });

        setResults(predictionResults);
      } else {
        const predictionResults = await withOutLocationPrediction({ drivers });

        setResults(predictionResults);
      }
      setShowResults(true);
    } catch (error) {
      console.error("Error processing prediction:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const closeResults = useCallback(() => {
    setShowResults(false);
  }, []);

  return {
    handleSubmit,
    isLoading,
    results,
    showResults,
    closeResults,
  };
};
