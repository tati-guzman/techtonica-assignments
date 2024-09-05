//Import React functionality from react package
import React, { useState } from 'react'
//Import info from App
import './App.jsx'

const StartButton = () => {
    
    const onClick = () => {
        console.log("The quiz should start");
    }
    
    return (
        <>
            <button type="submit" onClick={onClick}>Ready to Rumble!</button>
        </>
    )
}

export default StartButton