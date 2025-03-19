// import components
import Input from "./Input";
import Summary from "./Summary";
//import context
import { useFormContext } from "../context/FormContext";

const Experience = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>
        Job <span>(Most recent one)</span>
      </h2>
      <Input
        name={"companyName"}
        value={formData.companyName || ""}
        placeholder={"Apple Inc."}
        label={"Company Name"}
        onChange={handleChange}
      />
      <Input
        name={"role"}
        value={formData.role || ""}
        placeholder={"Senior Software Engineer"}
        label={"Job Title"}
        onChange={handleChange}
      />
      <Input
        name={"duration"}
        value={formData.duration || ""}
        label={"Duration"}
        placeholder={"2021 - present"}
        onChange={handleChange}
      />
      <Input
        name={"companyAddress"}
        value={formData.companyAddress || ""}
        isOptional={true}
        placeholder={"Apple Inc., Palo Alto, California."}
        label={"Company Address"}
        onChange={handleChange}
      />
      <Summary
        isOptional={true}
        name={"degreeSummary"}
        value={formData.degreeSummary || ""}
        placeholder={
          "Insert any important information about your job at this company. "
        }
        onChange={handleChange}
      />
    </>
  );
};

export default Experience;
