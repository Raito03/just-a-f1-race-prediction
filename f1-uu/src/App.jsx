import { useState, useEffect } from "react";
PredictionForm;
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import PredictionForm from "./components/PredictionForm";
import bg from "./assets/blue.jpg";
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const audio = new Audio("/audio/audio_f1.mp3");
    audio.play();

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="min-h-screen w-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={bg}
            alt="F1 Background"
            className="w-full h-full object-cover filter blur-sm brightness-50"
          />
        </div>

        {/* Content */}
        <div className="relative min-h-screen flex items-center justify-center px-4">
          <PredictionForm />
        </div>
      </div>
    </>
  );
}

export default App;
