//Import React functionality from react package
import React from 'react'
//Import info from App
import './App.jsx'


const Landing = ({onStart}) => {

    return (
        <>
            <h1>Welcome to Tati's Terrific Trivia!</h1>

            <p>Test your <em>Animal Knowledge</em> by answering 10 True/False questions.</p>
            
            <p>Click the button to begin!</p>

            <button onClick={onStart}>Ready to Rumble!</button>
        </>
    )
}

export default Landing