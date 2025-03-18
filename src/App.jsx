import "./App.css";
import { DOMContent } from "./components/DomContent";

import { FormProvider, useFormContext } from "./context/FormContext";

const App = () => {
  return (
    <FormProvider>
      <DOMContent />
    </FormProvider>
  );
};

export default App;
