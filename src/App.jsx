import "./App.css";
// import react hooks
import { useState } from "react";
// import components
import Input from "./components/Input";
import Summary from "./components/Summary";

const App = () => {
  const [inputValues, setInputValues] = useState({
    fullname: null,
    jobtitle: null,
    email: null,
    phone: null,
    address: null,
    summary: null,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Input
        name={"fullname"}
        placeholder={"John Doe"}
        label={"Your name"}
        onChange={handleInput}
      />
      <Input
        name={"jobtitle"}
        placeholder={"John Doe"}
        label={"Job Title"}
        isOptional={true}
        onChange={handleInput}
      />
      <Input
        type="email"
        name={"email"}
        placeholder={"johndoe@example.com"}
        label={"Your email"}
        onChange={handleInput}
      />
      <Input
        type="tel"
        name={"phone"}
        placeholder={"123 456 7890"}
        label={"Phone Number"}
        onChange={handleInput}
      />
      <Input
        name={"address"}
        isOptional={true}
        placeholder={"Saint React.js Street 123"}
        label={"Your address"}
        onChange={handleInput}
      />
      <Summary
        isOptional={true}
        name={"summary"}
        placeholder={
          "As lead frontend developer for a creative agency, my main role was... "
        }
        onChange={handleInput}
      />
    </>
  );
};

export default App;
