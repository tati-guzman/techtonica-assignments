import React from 'react'
import './App.jsx'

//Example of what setSelected is at its core:
// const setSelected = (myfunc) => {
//     selected = myfunc(selected)
// }

//You can also pass in an object and change selected to that object:
// const setSelected = (newSelected) => {
//     selected = newSelected
// }

const Word = ({setSelected, text}) => {

    //Create a function to keep track of the selected buttons
  const onClick = () => {
    setSelected((prevSelected) => {
     //If the button was previously selected, remove from the "select" state
        if (prevSelected.includes(text)) {
            return prevSelected.filter((buttonText) => buttonText !== text);
        } else if (!prevSelected.includes(text)) {
            //Select state can only take up to 4. If clicking 5th button, do not allow.
            if (prevSelected.length >= 4) {
                return prevSelected;
            } else {
                //If the button was not already selected, add to "select" state
                return [...prevSelected, text];
            }
        }
      }
    )
}

    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    )
}

export default Word



