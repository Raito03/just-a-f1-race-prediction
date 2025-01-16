import { useState } from "react";

import WithLocation from "./forms/WithLocation";
import WithoutLocation from "./forms/WithoutLocation";
import FormToggle from "./ui/FormToggle";

const NewPredictionForm = () => {
  const [activeForm, setActiveForm] = useState(true);

  return (
    <div className="w-full max-w-md p-8 rounded-xl backdrop-blur-md bg-black/30 border border-white/10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">
        <span className="turret-road-extrabold " style={{ fontSize: "2.3rem" }}>
          F1{" "}
        </span>
        Race Prediction
      </h2>

      <FormToggle activeForm={activeForm} onToggle={setActiveForm} />

      {activeForm ? <WithLocation /> : <WithoutLocation />}
    </div>
  );
};

export default NewPredictionForm;
