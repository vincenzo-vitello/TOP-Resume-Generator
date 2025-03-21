import { useState } from "react";
import { useFormContext } from "../context/FormContext";
import MultiStepForm from "./MultiStepForm";
import { Resume } from "./Resume";

export const DOMContent = () => {
  const handleSubmitClick = () => {
    setIsSubmitted(true);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { formData } = useFormContext();
  return (
    <>
      <h1>Resume Builder</h1>
      <div className="content">
        {isSubmitted ? (
          <Resume data={formData} />
        ) : (
          <MultiStepForm handleSubmit={handleSubmitClick} />
        )}
      </div>
    </>
  );
};
