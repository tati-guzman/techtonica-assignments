//Import React functionality from react package
import React, { useState } from 'react';
//Import info from App
import '../App.jsx'
//Import Leader Board component
import LeaderBoard from './LeaderBoard.jsx';

const FinalMessage = ({count, currentPlayer, addingNewUser, playerInfo}) => {
 
    //To start another quiz, take users back to the landing page by re-loading the page.
    const refreshPage = () => {
        window.location.reload();
    }
    
    //State to manage leader board visibility and buttons getting disabled
    const [showLeaderBoard, setShowLeaderBoard] = useState(false);

    //If there is a new user, send POST request to save score and user name
    const saveScore = async (currentPlayer, count) => {
        
        const submission = { currentPlayer, count }
        
        try {
            const response = await fetch('/players/new-user', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission)
            });

            if(!response.ok) {
                throw new Error("Failed to POST new data");
            } else {
                //Set show leader board to true and disable the score buttons
                setShowLeaderBoard(true);
            }
        } catch (error) {
            console.error({ message: "Unable to save new player name and score", details: error });
        }
    }

    //If a previous player wants to update their score, sent PUT request to update
    const updateScore = async (currentPlayer, count) => {
        const id = playerInfo.filter((player) => player.username == currentPlayer)[0].id;

        const submission = { count }
        
        try {
            const response = await fetch(`/players/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(submission)
            });

            if(!response.ok) {
                throw new Error("Failed to update the score");
            } else {
                //Set show leader board to true and disable the score buttons
                setShowLeaderBoard(true);
            }
        } catch (error) {
            console.error({ message: "Unable to save new score", details: error });
        }
    }

    //Function to find the previous score of a current player
    const findOldScore = (playerInfo, currentPlayer) => {
        const playerStats = playerInfo.filter((player) => player.username == currentPlayer);
        console.log(playerStats);
        return playerStats[0].score;
    }
    
    return (
        <>
            <h1>Congratulations on completing the quiz!</h1>
            
            {/* <h2>You answered {count} questions correctly. Are you ready to be a zoologist?</h2> */}
            
            <h2>You answered {count} questions correctly.</h2>

            {addingNewUser ? <button onClick={() => saveScore(currentPlayer, count)} disabled={showLeaderBoard}>Save My Score</button> : <div>
                <h2>Your saved score is {findOldScore(playerInfo, currentPlayer)}. Want to update your score to {count}?</h2>
                <button onClick={() => updateScore(currentPlayer, count)} disabled={showLeaderBoard}>Update my Score</button>
                <button onClick={() => setShowLeaderBoard(true)} disabled={showLeaderBoard}>No Thanks</button></div>}

            {showLeaderBoard && <LeaderBoard />}
            
            {/* <p>0-3: Maybe just keep watching animal reels for now</p>
            <p>4-6: You're ready to work on Rover!</p>
            <p>7-9: That local zoo internship might just be yours</p>
            <p>10: Are you Steve Irwin? 🐊 </p> */}

            <button onClick={refreshPage}>Try Again!</button>
        </>
    )
}

export default FinalMessage