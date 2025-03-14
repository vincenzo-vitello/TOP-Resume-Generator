import "./App.css";
// import components
import Input from "./components/Input";
import Summary from "./components/Summary";
// import custom hook
import useForm from "./customHooks/useForm";

const App = () => {
  const { handleInput, inputValues } = useForm(); // utilizing custom hook so I can separate state logic from App structure
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
