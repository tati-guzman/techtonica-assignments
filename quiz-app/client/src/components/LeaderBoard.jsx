//Import React functionality from react package
import React, { useState, useEffect } from 'react';

const LeaderBoard = () => {
    //State to hold leader board info
    const [leaderBoard, setLeaderBoard] = useState([]);
    
    //Use Effect with no dependencies [] to pull the current player info
    useEffect(() => {
        loadAllPlayers();
    }, []);

    const loadAllPlayers = async () => {
        try {
            const response = await fetch('/players/leader-board');
            console.log(response);

            if(!response.ok) {
                throw new Error("Failed to fetch all player info");
            }

            const allPlayerInfo = await response.json();
            console.log("All Player Info:", allPlayerInfo);
            setLeaderBoard(allPlayerInfo);
        } catch (error) {
            console.error({ message: "Unable to populate information", details: error });
        }
    }
    console.info('leaderboard', leaderBoard)

    return (
        <>
        <h2>Trivia Leader Board:</h2>
        <div>
        {leaderBoard.map((player, index) => {
            return <p key={index}> {player.username} - Score: {player.score}</p>
        })}
        </div>
        </>
    )
}

export default LeaderBoard