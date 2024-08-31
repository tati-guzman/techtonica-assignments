import App from "../App.jsx";

const Message = ({data}) => {
    return (
      <div>
        <h3>Thank you for submitting our form,{data.name}!</h3>
        <p> You registered the email: {data.email}</p>
        <p> Please make sure to check your spam folder for our confirmation email.</p>
      </div>
    );
  };
  
  export default Message;