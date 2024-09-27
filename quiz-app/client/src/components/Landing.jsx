//Import React functionality from react package
import React, { useState } from 'react'

import UserSelection from './UserSelection.jsx';


const Landing = ({onStart, setPlayerInfo, playerInfo, setCurrentPlayer, addingNewUser, setAddingNewUser}) => {

    //State to manage seeing user selection or not
    const [userSelectionVisible, setUserSelectionVisible] = useState(false);

    const selectUser = async () => {
        try {
            const response = await fetch('/players');
            console.log(response);

            if(!response.ok) {
                throw new Error("Failed to fetch all player info");
            }

            const allPlayerInfo = await response.json();
            setPlayerInfo(allPlayerInfo);
            console.log(allPlayerInfo);
            setUserSelectionVisible(true);
        } catch (error) {
            console.error({ message: "Unable to populate information", details: error });
        }
    }
    
    return (
        <>
            <h1>Welcome to Tati's Terrific Trivia!</h1>

            <p>Test your <em>Animal Knowledge</em> by answering 10 True/False questions.</p>
            
            <p>Click the button to begin!</p>

            <button onClick={onStart}>Ready to Rumble!</button>

            <button onClick={selectUser}>Want a chance to make it to the leader board? Sign in first!</button>

            {userSelectionVisible && <UserSelection playerInfo={playerInfo} onStart={onStart} setCurrentPlayer={setCurrentPlayer} addingNewUser={addingNewUser} setAddingNewUser={setAddingNewUser}/>}
        </>
    )
}

export default Landing