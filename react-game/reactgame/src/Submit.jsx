import React from 'react'
import './App.jsx'

const Submit = () => {
    //Creates a variable to add styling within the component rather than in a stylesheet
    const style = {
        backgroundColor: "#f7fc81",
        fontSize: "25px",
        borderRadius: "50%",
        width: "200px"
    }

    return (
        <button style={style}>Submit Guess</button>
    )
}

export default Submit