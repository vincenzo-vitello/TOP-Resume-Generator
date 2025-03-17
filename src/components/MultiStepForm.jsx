import { useState } from "react";

import PersonalInfos from "./PersonalInfos";
import EducationInfos from "./EducationInfos";
import Experience from "./Experience";
// import ProgressBar from "./ProgressBar";
import { useFormContext } from "../context/FormContext";

const steps = [PersonalInfos, EducationInfos, Experience];

const MultiStepForm = () => {
  const [step, setStep] = useState(0);
  const { formData } = useFormContext();
  const CurrentStep = steps[step];

  const nextStep = () => {
    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };
  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <CurrentStep />
      <div>
        {step > 0 && <button onClick={prevStep}>Indietro</button>}
        {step < steps.length - 1 ? (
          <button onClick={nextStep}>Avanti</button>
        ) : (
          <button onClick={() => console.log("Dati finali:", formData)}>
            Invia
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
