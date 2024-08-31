//Import styling
import "./App.css";

//Import react functionalities
import { useState } from "react";

//Import components
import RegisterYourApplicationForm from "./components/form";
import Message from "./components/message";

export default function App() {
  //State to capture if the form has been submitted or not
  const [isSubmit, setIsSubmit] = useState(false);

  //State to capture the data that has been submitted
  const [data, setData] = useState({});

  //Function to run when the form has been submitted
  const submitData = (data) => {
    //Print object to the console with all the details
    console.log(data);
    //Change the state of isSubmit to true, which will trigger the rendering of the message component below
    setIsSubmit(true);
    //Change the state of data to the data that was submitted so it gets passed as a prop to the message that's about to be rendered
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