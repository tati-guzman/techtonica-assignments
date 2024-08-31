import React, { useRef } from "react";
import "../App.css";

const RegisterYourApplicationForm = ({onSubmit}) => {

    //All these variables are being created as refs for their respective question in the form
    const userName = useRef();
    const userEmail = useRef();
    const userOrderNum = useRef();
    const reasonForReturn = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const allUserInfo = {
        
        };

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label>Name: *
        <input 
        type="text"
        required
        placeholder="Name"
        />
      </label>

      <label>Email: *
        <input 
        type="email"
        required
        placeholder="Email"
        />
      </label>

      <label>Order Number: *
        <input
            type="number"
            required
            min="0"
            placeholder="Please Enter Ticket Number"
        />
      </label>

      <label>Reason for Return: *
        <p>Please be specific in your reasons for returning your item</p> 
        <textarea name="reason" required/>
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegisterYourApplicationForm;
