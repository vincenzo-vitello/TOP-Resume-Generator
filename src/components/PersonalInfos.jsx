// import components
import Input from "./Input";
import Summary from "./Summary";
//import context
import { useFormContext } from "../context/FormContext";

const PersonalInfos = () => {
  const { formData, updateFormData } = useFormContext();

  const handleChange = (e) => {
    updateFormData({ [e.target.name]: e.target.value });
  };
  return (
    <>
      <h2>Personal Informations</h2>

      <Input
        name={"fullname"}
        value={formData.fullname || ""}
        placeholder={"John Doe"}
        label={"Your name"}
        onChange={handleChange}
      />
      <Input
        name={"jobtitle"}
        value={formData.jobtitle || ""}
        placeholder={"John Doe"}
        label={"Job Title"}
        isOptional={true}
        onChange={handleChange}
      />
      <Input
        type="email"
        name={"email"}
        value={formData.email || ""}
        placeholder={"johndoe@example.com"}
        label={"Your email"}
        onChange={handleChange}
      />
      <Input
        type="tel"
        name={"phone"}
        value={formData.phone || ""}
        placeholder={"123 456 7890"}
        label={"Phone Number"}
        onChange={handleChange}
      />
      <Input
        name={"address"}
        value={formData.address || ""}
        isOptional={true}
        placeholder={"Saint React.js Street 123"}
        label={"Your address"}
        onChange={handleChange}
      />
      <Summary
        isOptional={true}
        name={"summary"}
        value={formData.summary || ""}
        placeholder={
          "As lead frontend developer for a creative agency, my main role was... "
        }
        onChange={handleChange}
      />
    </>
  );
};

export default PersonalInfos;
