//Import React functionality from react package
import React from 'react'
//Import info from App
import './App.jsx'

const FinalMessage = ({count}) => {
    
    //To start another quiz, take users back to the landing page by re-loading the page.
    const refreshPage = () => {
        window.location.reload();
    }
    
    return (
        <>
            <h1>Congratulations on completing the quiz!</h1>
            
            <h2>You answered {count} questions correctly. Are you ready to be a zoologist?</h2>
            
            <p>0-3: Maybe just keep watching animal reels for now</p>
            <p>4-6: You're ready to work on Rover!</p>
            <p>7-9: That local zoo internship might just be yours</p>
            <p>10: Are you Steve Irwin? 🐊 </p>

            <button onClick={refreshPage}>Try Again!</button>
        </>
    )
}

export default FinalMessage