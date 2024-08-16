import React from 'react'
import './App.jsx'


const Word = ({selected, setSelected, text, id, matched}) => {

    //Create a function to update the state of the selected buttons
    const onClick = () => {
        setSelected((prevSelected) => {
            //If the button was previously selected, remove from the "select" state
            if (prevSelected.includes(id)) {
                // Using filter, modify prevSelected to only include everything that's not the id just clicked
                return prevSelected.filter((buttonId) => buttonId !== id);
            } else if (!prevSelected.includes(id)) {
                //Select state can only take up to 4. If clicking 5th button, do not do anything.
                if (prevSelected.length >= 4) {
                    return prevSelected;
                } else {
                    //If the button was not already selected, add to "select" state
                    return [...prevSelected, id];
                    }
                }
            }
        )
    }

    //If the id is in the matched state, set color to the value indicated in the matched state object. Otherwise, check if the id is in the selected state. If it is selected, set the color to pink. If it is not selected, set to light sky blue.
    const color = id in matched ? matched[id] : selected.includes(id) ? "pink" : "lightskyblue"

    return (
        <div>
            <button style={{backgroundColor: color}} onClick={onClick} disabled={id in matched}>{text}</button>
        </div>
    )
}

export default Word



