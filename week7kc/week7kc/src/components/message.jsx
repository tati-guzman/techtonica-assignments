import App from "../App.jsx";

//Data prop holds the various user values from allUserInfo so they can be plugged in accordingly
const Message = ({data}) => {
    return (
      <div>
        <h3>Thank you for submitting our form,{data.name}!</h3>
        
        <p>Your Order Number is {data.orderNum}</p>
        
        <p> You registered the email: {data.email}</p>
        <p> Please make sure to check your spam folder for our confirmation email.</p>

        <p>Our records indicate that you are returning this because of the following reason:<br/><br/>{data.reason}</p>
      </div>
    );
  };
  
  export default Message;