//Import functionalities
import React from 'react';

const ViewContact = ({ setSelectedIndividual, selectedIndividual, setComponent }) => {
    
    //console.log(selectedIndividual)
    //user_id, name, phone, email, birthday_notes, recent
    
    const changePage = (event) => {
        
        switch (event.target.value) {
            case "home":
                setSelectedIndividual(null);
                setComponent('landing');
                break;
            case "list":
                setSelectedIndividual(null);
                setComponent('list');
                break;
            case "update":
                setComponent('form');
                break;
        }
    }

    return (
        <>
            <h1>Detailed Contact Info</h1>
            <h2>{selectedIndividual.name}</h2>
            <p>Phone: {selectedIndividual.phone}</p>
            <p>Email: {selectedIndividual.email}</p>
            <p>Birthday Notes: {selectedIndividual.birthday_notes}</p>
            
            <p>Talk Status: {selectedIndividual.recent ? "Yay! You've talked recently!" : selectedIndividual.recent === false ? "Oof y'all haven't talked recently. Maybe reach out?" : "Hmm none set"}</p>

            <button value="home" onClick={changePage}>Back to Home</button>
            <button value="list" onClick={changePage}>Back to List</button>
            <button value="update" onClick={changePage}>Update</button>
        </>
    )
}

export default ViewContact