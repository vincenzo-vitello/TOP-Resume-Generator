import { useState } from "react";

import PersonalInfos from "./PersonalInfos";
import EducationInfos from "./EducationInfos";
import Experience from "./Experience";
import ProgressBar from "./ProgressBar";

const steps = [PersonalInfos, EducationInfos, Experience];

const MultiStepForm = ({ handleSubmit }) => {
  const [step, setStep] = useState(0);
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
          <button onClick={() => handleSubmit()}>Invia</button>
        )}
      </div>
      <ProgressBar step={step} totalSteps={steps.length} />
    </div>
  );
};

export default MultiStepForm;
