//Import necessary functionalities and components
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const SightingsForm = () => {

    //State to hold all form data in one object
    const [sightingsFormData, setSightingsFormData] = useState({
        "date_time": null,
        "animal_id": "",
        "location": "",
        "healthy": null,
        "sighter_email": "",
    })

    //Function to update form state when data is inputted
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSightingsFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    //Function to send POST request of new species entry
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/tracker/sightings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(sightingsFormData)
            });

            if(!response.ok) {
                throw new Error("Error with sighting submission");
            } else {
                setShowModal(true);
            }
            
        } catch (error) {
            console.error({ message: "Error submitting new sighting", details: error })
            alert("We're sorry, there was an error submitting your sighting. Please try again or submit a ticket.");
        } finally {
            clearForm();
        }
    }

    //Function to clear form after submission or canceling changes
    const clearForm = () => {
        setSightingsFormData({
            "date_time": null,
            "animal_id": "",
            "location": "",
            "healthy": null,
            "sighter_email": "",
        })
    }

    //State to track Modal Visibility
    const [showModal, setShowModal] = useState(false);

//INPUT FORM QUESTIONS!!!
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor=""></Form.Label>
                <input
                    id=""
                    name=""
                    type=""
                    placeholder=""
                    required
                    value={}
                    onChange={handleChange}
                />

                <Form.Label htmlFor=""></Form.Label>
                <input
                    id=""
                    name=""
                    type=""
                    placeholder=""
                    required
                    value={}
                    onChange={handleChange}
                />

                <Form.Label htmlFor=""></Form.Label>
                <input
                    id=""
                    name=""
                    type=""
                    placeholder=""
                    required
                    value={}
                    onChange={handleChange}
                />

                <Form.Label htmlFor=""></Form.Label>
                <input
                    id=""
                    name=""
                    type=""
                    placeholder=""
                    required
                    value={}
                    onChange={handleChange}
                />

                <Form.Label htmlFor=""></Form.Label>
                <input
                    id=""
                    name=""
                    type=""
                    placeholder=""
                    required
                    value={}
                    onChange={handleChange}
                />

                <Button type="submit">Submit Sighting</Button>
                <Button type="button" onClick={clearForm}>Clear Form</Button>

            </Form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>Thank you for submitting a new sighting!</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Close Message</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SightingsForm