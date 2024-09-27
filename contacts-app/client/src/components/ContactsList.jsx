//Import necessary functionalities
import React, { useEffect } from 'react';

const ContactsList = ({ setComponent, setContactList, contactList, setSelectedIndividual }) => {

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

    //Function to open contact form with details to update
    const handleUpdate = (contact) => {
        setSelectedIndividual(contact);
        setComponent('form');
    }

    //Function to delete contact
    const deleteContact = async (contact) => {
        try {
            const response = await fetch(`/contacts/${contact}`, {
                method: 'DELETE'
            });

            if(!response.ok) {
                throw new Error("Failed to delete contact!");
            }

            //Filter out of display once deleted
            setContactList(prevList => prevList.filter((individual) => individual.user_id !== contact.user_id));
        } catch(error) {
            console.error({ message: "error deleting individual", details: error });
            // <p>Looks like this one is latching on! We are having trouble deleting this contact. Please try again.</p>
        }
    }

    //Function to open details of selected individual
    const openDetails = (contact) => {
        setSelectedIndividual(contact);
        setComponent('details');
    }

    return (
        <>
            <h1>Friendly Famous Folks (hopefully)</h1>
            
            <div className="contacts">
                {contactList.map((contact, index) => {
                    return (
                        <div key={index} className="individual">
                            <h3>{contact.name}</h3>
                            <button onClick={() => handleUpdate(contact)}>Update</button>
                            <button onClick={() => deleteContact(contact)}>Delete</button>
                            <button onClick={() => openDetails(contact)}>Details</button>
                        </div> 
                    )
                })}
            </div>

            <button onClick={() => setComponent('landing')}>Back to Home</button>
        </>
    )
}

export default ContactsList