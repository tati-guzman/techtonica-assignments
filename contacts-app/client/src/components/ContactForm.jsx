//Import functionalities
import React, { useState, useEffect } from 'react';

const ContactForm = ({ selectedIndividual, setSelectedIndividual, setComponent }) => {
    
    // console.log(selectedIndividual)
    //user_id, name, phone, email, birthday_notes, recent

    //State to hold all form data in one object
    const [contactFormData, setContactFormData] = useState({
        "name": "",
        "phone": "",
        "email": "",
        "birthday_notes": "",
        "recent": null
    })

    //Pre-populate form if the user is there to update someone
    useEffect(() => {
        if (selectedIndividual) {
            setContactFormData({
                "name": selectedIndividual.name,
                "phone": selectedIndividual.phone,
                "email": selectedIndividual.email,
                "birthday_notes": selectedIndividual.birthday_notes,
                "recent": selectedIndividual.recent
            })
        }
    }, [])

    //Track changes to the form input
    const handleChange = (event) => {
        const { name, value } = event.target;
        setContactFormData(prevFormData => ({...prevFormData, [name]: value }));
    }
    
    //Submit the data as POST or PUT depending on if it's new or an update, and then send to contacts list
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (selectedIndividual) {
                //PUT Request to update current contact
                const contactsResponse = await fetch(`/contacts/${selectedIndividual.user_id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: contactFormData.name,
                        phone: contactFormData.phone,
                        email: contactFormData.email,
                        birthday_notes: contactFormData.birthday_notes
                    })
                })

                //Error handling for PUT request to contacts table
                if(!contactsResponse.ok) {
                    throw new Error("Failed to update contacts table");
                }

                //PUT Request to update recent status for current contact
                const recentStatusResponse = await fetch(`/contacts/recent/${selectedIndividual.user_id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        recent: contactFormData.recent
                    })
                })

                //Error handling for PUT request to recents table
                if(!recentStatusResponse.ok) {
                    throw new Error("Failed to update recent status");
                } else {
                    //Clear selected individual
                    setSelectedIndividual(null);
                    alert("Contact was updated successfully!");
                }
            } else {
                //POST Request to create new contact
                const newContactResponse = await fetch('/contacts', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(contactFormData)
                })

                //Error handling for PUT request to contacts table
                if(!newContactResponse.ok) {
                    throw new Error("Failed to create new contact");
                } else {                
                    alert("Contact was created successfully!");
                }
            }
        } catch (error) {
            console.error({ message: "Unable to submit information", details: error });
        } finally {
            clearForm();
        }
    }

    //Remove values from form and wipe selected individual state
    const clearForm = () => {
        setContactFormData({
            "name": "",
            "phone": "",
            "email": "",
            "birthday_notes": "",
            "recent": null
        });

        if (selectedIndividual) {
            setSelectedIndividual(null);
        }
    }

    //If the user exits without clearing the form, reset the selected individual and send them to contact list
    const switchViews = () => {
        //Remove selected individual from state
        if (selectedIndividual) {
            setSelectedIndividual(null);
        }
        //Switch over to contacts list
        setComponent('list');
    }

    return (
        <>
            <h1>Contact Form</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label><br></br>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={contactFormData["name"]}
                    onChange={handleChange}
                    required
                /><br></br>

                <label htmlFor="phone">Phone Number:</label><br></br>
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    value={contactFormData["phone"]}
                    onChange={handleChange}
                    placeholder="Any phone number format accepted"
                    required
                /><br></br>

                <label htmlFor="email">Email:</label><br></br>
                <input 
                    id="email"
                    name="email"
                    type="email"
                    value={contactFormData["email"]}
                    onChange={handleChange}
                    placeholder="probably_the_agent@agency.com"
                    required
                /><br></br>

                <label htmlFor="birthday_notes">Birthday Notes:</label><br></br>
                <input
                    id="birthday_notes"
                    name="birthday_notes"
                    type="text"
                    value={contactFormData["birthday_notes"]}
                    onChange={handleChange}
                    placeholder="Birthday, birth month, possible gift ideas, etc."
                /><br></br><br></br>

                <label>Contact Status:</label><br></br>
                    <label htmlFor="true">We talked recently!</label>
                    <input
                        id="true"
                        name="recent"
                        type="radio"
                        label="We talked recently!"
                        value="true"
                        checked={contactFormData.recent === true}
                        onChange={() => setContactFormData(prevFormData => ({...prevFormData, recent: true }))}
                    /><br></br>
                    <label htmlFor="false">We haven't talked in a WHILE</label>
                    <input
                        id="false"
                        name="recent"
                        type="radio"
                        label="We haven't talked in a WHILE"
                        value="false"
                        checked={contactFormData.recent === false}
                        onChange={() => setContactFormData(prevFormData => ({...prevFormData, recent: false }))}
                    /><br></br><br></br>
                

                <button onClick={clearForm}>Cancel</button>
                <button type="submit">Submit Contact</button>
                
            </form>

            <button onClick={switchViews}>View Contact List</button>
        </>
    )
}

export default ContactForm