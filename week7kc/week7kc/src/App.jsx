import "./App.css";
import { useState } from "react";
import RegisterYourApplicationForm from "./components/form";
import Message from "./components/message";

export default function App() {
  //State to capture if the form has been submitted or not
  const [isSubmit, setIsSubmit] = useState(false);

  //State to capture the data being submitted
  const [data, setData] = useState({});

  const submitData = (data) => {
    console.log(data);
    setIsSubmit(true);
    setData(data);
  };

  return (
    <div className="App">
      <h1>Welcome to Techtonica's Refund Form!</h1>

      {isSubmit ? (
        <Message data={data} />
      ) : (
        <RegisterYourApplicationForm onSubmit={submitData} />
      )}
    </div>
  );
}