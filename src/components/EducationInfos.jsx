// import components
import Input from "./Input";
import Summary from "./Summary";
//import context
import { useFormContext } from "../context/FormContext";

const EducationInfos = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <Input
        name={"degree"}
        value={formData.degree || ""}
        placeholder={"John Doe"}
        label={"Your name"}
        onChange={handleChange}
      />
      <Input
        name={"university"}
        value={formData.university || ""}
        placeholder={"John Doe"}
        label={"University"}
        onChange={handleChange}
      />
      <Input
        type="date"
        name={"graduationDate"}
        value={formData.graduationDate || ""}
        label={"Graduation Date"}
        onChange={handleChange}
      />
      <Input
        name={"universityAddress"}
        value={formData.universityAddress || ""}
        placeholder={"Steve Jobs Str., Palo Alto, California."}
        label={"University Address"}
        onChange={handleChange}
      />
      <Summary
        isOptional={true}
        name={"degreeSummary"}
        value={formData.degreeSummary || ""}
        placeholder={
          "Insert any important information about your career at University "
        }
        onChange={handleChange}
      />
    </>
  );
};

export default EducationInfos;
