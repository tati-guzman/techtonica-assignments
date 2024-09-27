//Import necessary functionalities
import React from 'react';

const Landing = ({ setComponent }) => {


    return (
        <>
            <h1>Welcome to the Celebrity Contacts App</h1>
            
            <button onClick={() => setComponent('list')}>View All Contacts</button>
            
            <button onClick={() => setComponent('form')}>Create New Contact</button>
        </>
    )
}

export default Landing