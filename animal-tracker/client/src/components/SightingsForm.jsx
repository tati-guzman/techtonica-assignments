//Import necessary functionalities and components
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const SightingsForm = () => {

    //State to hold all form data in one object
    const [sightingsFormData, setSightingsFormData] = useState({
        "date_time": "",
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
            "date_time": "",
            "animal_id": "",
            "location": "",
            "healthy": null,
            "sighter_email": "",
        })
    }

    //State to track Modal Visibility
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="datetime">When was the sighting?</Form.Label>
                <input
                    id="datetime"
                    name="date_time"
                    type="datetime-local"
                    required
                    value={sightingsFormData["date_time"]}
                    onChange={handleChange}
                />

                <Form.Label htmlFor="animal-id">Individual Spotted: </Form.Label>
                <input
                    id="animal-id"
                    name="animal_id"
                    type="text"
                    placeholder="Please enter the individual's ID number"
                    required
                    value={sightingsFormData["animal_id"]}
                    onChange={handleChange}
                />

                <Form.Label htmlFor="location">Where was the sighting?</Form.Label>
                <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="Any location information is accepted!"
                    required
                    value={sightingsFormData["location"]}
                    onChange={handleChange}
                />

                <Form.Label>Health Status: </Form.Label>
                <Form.Check
                    id="healthy"
                    name="healthy"
                    type="radio"
                    label="Healthy"
                    value="true"
                    checked={sightingsFormData.healthy === true}
                    onChange={() => setSightingsFormData(prevFormData => ({ ...prevFormData, healthy: true }))}
                />
                <Form.Check
                    id="not-healthy"
                    name="healthy"
                    type="radio"
                    label="Not Healthy"
                    value="false"
                    checked={sightingsFormData.healthy === false}
                    onChange={() => setSightingsFormData(prevFormData => ({ ...prevFormData, healthy: false }))}
                />
                <Form.Check
                    id="health-unknown"
                    name="healthy"
                    type="radio"
                    label="Unknown"
                    value=""
                    checked={sightingsFormData.healthy === null}
                    onChange={() => setSightingsFormData(prevFormData => ({ ...prevFormData, healthy: null }))}
                />

                <Form.Label htmlFor="email">Email of Sighter: </Form.Label>
                <input
                    id="email"
                    name="sighter_email"
                    type="email"
                    placeholder="sighter@email.com"
                    required
                    value={sightingsFormData["sighter_email"]}
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