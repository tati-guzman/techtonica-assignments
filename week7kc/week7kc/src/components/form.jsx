//useRef is a React hook that allows you to store values similar to state but does not re-render the component!
import React, { useRef } from "react";
import "../App.css";

const RegisterYourApplicationForm = ({onSubmit}) => {

    //All these variables are being created as refs for their respective question in the form
    const userName = useRef(null);
    const userEmail = useRef(null);
    const userOrderNum = useRef(null);
    const reasonForReturn = useRef(null);

    //When the input on any of the fields changes, the appropriate ref is updated to hold its new value (and does not re-render anything since it's a ref)
    const handleChange = (event, ref) => {
        ref.current = event.target.value;
    };

    //Function for when the form is submitted
    const handleSubmit = (event) => {
        //Prevents page from being re-loaded
        event.preventDefault();

        //Set the object allUserInfo to hold the values of the submitted data by plugging in the current ref values
        const allUserInfo = {
            name: userName.current,
            email: userEmail.current,
            orderNum: userOrderNum.current,
            reason: reasonForReturn.current
        };

        //Send this data to the parent component to run onSubmit function with user values
        onSubmit(allUserInfo);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>Name: *
        <input 
            type="text"
            required
            placeholder="Name"
            onChange={(event) => handleChange(event, userName)}
            ref={userName}
        />
      </label>

      <label>Email: *
        <input 
            type="email"
            required
            placeholder="Email"
            onChange={(event) => handleChange(event, userEmail)}
            ref={userEmail}
        />
      </label>

      <label>Order Number: *
        <input
            type="number"
            required
            min="0"
            placeholder="Please Enter Ticket Number"
            onChange={(event) => handleChange(event, userOrderNum)}
            ref={userOrderNum}
        />
      </label>

      <label>Reason for Return: *
        <p>Please be specific in your reasons for returning your item</p> 
        <textarea
            name="reason"
            required
            onChange={(event) => handleChange(event, reasonForReturn)}
            ref={reasonForReturn}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterYourApplicationForm;
