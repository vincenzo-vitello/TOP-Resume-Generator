import { useState } from "react";
// creating custom hook to separate app logic and structure
const useForm = () => {
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
  //   console.log(inputValues);
  return { inputValues, handleInput };
};

export default useForm;
