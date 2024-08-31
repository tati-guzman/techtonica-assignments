//useRef is a React hook that allows you to store values similar to state but does not re-render the component!
import React, { useRef } from "react";
import "../App.css";

const RegisterYourApplicationForm = ({onSubmit}) => {

    //All these variables are being created as refs for their respective question in the form
    const userName = useRef(null);
    const userEmail = useRef(null);
    const userOrderNum = useRef(null);
    const reasonForReturn = useRef(null);

    const handleChange = (event, ref) => {
        ref.current = event.target.value;
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        const allUserInfo = {
            name: userName.current,
            email: userEmail.current,
            orderNum: userOrderNum.current,
            reason: reasonForReturn.current
        };

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
