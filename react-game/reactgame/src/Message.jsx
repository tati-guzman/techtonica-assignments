import React from 'react'
import './App.jsx'

const Message = ({selected}) => {

    const getCurrentMessage = () => {
       //Set different messages based on how many buttons are currently selected (uses the selected state)
        if (selected.length === 0) {
            return "Select 4 words to make a group!";
        } else if (selected.length < 4) {
            return "You got this! Good luck finding your 4!";
        } else if (selected.length === 4) {
            return "Hit submit to see if these are a matching group!";
        }
      }
    
    return (
        <div>
            {/* Text to be displayed is the result of running the getCurrentMessage function above */}
            <h3>{getCurrentMessage()}</h3>
        </div>
    )
}

export default Message