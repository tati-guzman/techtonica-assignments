//Import React functionality from react package
import React, { useState } from 'react'
//Import info from App
import './App.jsx'
//Import relevant components
import StartButton from './StartButton.jsx'

const Landing = () => {
    return (
        <>
            <h1>Welcome to Tati's Terrific Trivia!</h1>

            <p>Test your <em>Animal Knowledge</em> by answering 10 True/False questions.</p>
            
            <p>Click the button to begin!</p>
            
            <StartButton />
        </>
    )
}

export default Landing