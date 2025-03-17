import "./App.css";
import MultiStepForm from "./components/MultiStepForm";

import { FromProvider } from "./context/FormContext";
const App = () => {
  return (
    <FromProvider>
      <MultiStepForm />
    </FromProvider>
  );
};

export default App;
