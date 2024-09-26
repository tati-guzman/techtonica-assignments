//Import React functionality from react package
import React, { useState } from 'react';

const UserSelection = ({ playerInfo, onStart, setCurrentPlayer }) => {
    
    const [selectedUsername, setSelectedUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");
    const [addingNewUser, setAddingNewUser] = useState(false);

    const handleChosenUsername = (event) => {
        setSelectedUsername(event.target.value);
        setAddingNewUser(event.target.value === "new user option")
    }

    const handleNewUsername = (event) => {
        setNewUsername(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const player = addingNewUser ? newUsername : selectedUsername;
        //NOTE: Missing error handling for users with the same name
        setCurrentPlayer(player);
        onStart();
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Choose Your Username:</label>
                <select id="username" value={selectedUsername} onChange={handleChosenUsername}>
                    {playerInfo.map((player, index) => <option key={index} value={player.id}>{player.username}</option>)}
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