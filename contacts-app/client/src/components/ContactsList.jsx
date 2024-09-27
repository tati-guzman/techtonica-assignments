//Import necessary functionalities
import React, { useEffect } from 'react';

const ContactsList = ({ setComponent, setContactList, contactList }) => {

    //Fetch all contacts when going into this component
    useEffect(() => {
        loadContacts();
    }, []);

    //Function to fetch all contacts
    const loadContacts = async () => {
        try {
            const response = await fetch('/contacts');

            if (response && !response.ok) {
                throw new Error("failed to get all contact list info");
            }

            const contactListInfo = await response.json();
            setContactList(contactListInfo);
        } catch (error) {
            console.error({ message: "Error loading contacts", details: error });
        }
    }


    return (
        <>
            <h1>Friendly Famous Folks (hopefully)</h1>
            
            <div className="contacts">
                {contactList.map((contact, index) => {
                    return (
                        <div key={index} className="individual">
                            <h3>{contact.name}</h3>
                            {/* <button onClick={handleUpdate}>Update</button>
                            <button onClick={deleteContact}>Delete</button>
                            <button onClick={openDetails}>Details</button> */}
                            <button>Update</button>
                            <button>Delete</button>
                            <button>Details</button>
                        </div> 
                    )
                })}
            </div>

            <button onClick={() => setComponent('landing')}>Back to Home</button>
        </>
    )
}

export default ContactsList