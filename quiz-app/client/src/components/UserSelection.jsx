//Import React functionality from react package
import React, { useState } from 'react';

const UserSelection = ({ playerInfo, onStart, setCurrentPlayer, addingNewUser, setAddingNewUser }) => {
    
    //State to track the username picked from the drop down (including if it's "Add New User")
    const [selectedUsername, setSelectedUsername] = useState("");

    //State to track the new user name that is being submitted
    const [newUsername, setNewUsername] = useState("");

    //Function to update states accordingly based on what the user clicks from the drop down
    const handleChosenUsername = (event) => {
        //Holds the selected option in the selectedUsername state
        setSelectedUsername(event.target.value);

        //If the selected user name value is "new user option" then set addingNewUser to true to show the other input field
        setAddingNewUser(event.target.value === "new user option")
    }

    const handleNewUsername = (event) => {
        //As the user inputs the new user name, store the answer for submission
        setNewUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        //If there is a new user, use the newUsername state. Otherwise, use the selectedUsername from the dropdown
        const player = addingNewUser ? newUsername : selectedUsername;
        //NOTE: Missing error handling for users with the same name!!!
        
        //Store the selected username to use when the game is over
        setCurrentPlayer(player);

        //Start the game with the same functionality as the "ready to rumble" button
        onStart();
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Choose Your Username:</label>
                <select id="username" value={selectedUsername} onChange={handleChosenUsername}>
                    {playerInfo.map((player, index) => <option key={index} value={player.username}>{player.username}</option>)}
                    <option key={playerInfo.length} value="new user option">Add New User</option>
                </select>

                {addingNewUser && (
                    <div>
                        <label htmlFor="new-user">Add New Username:</label>
                        <input 
                            id="new-user" 
                            type="text" 
                            value={newUsername} 
                            onChange={handleNewUsername} 
                            required/>
                    </div>)}

                <button type="submit">Start Game with Username</button>
            </form>
        </>
    )
}

export default UserSelection