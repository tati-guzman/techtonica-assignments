//Import necessary functionalities and components
import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const SpeciesForm = () => {
    
    //State to hold all form data in an object
    const [speciesFormData, setSpeciesFormData] = useState({
        "common_name": "",
        "scientific_name": "",
        "amount_living": "",
        "status_code": ""
    })

    //Function to update form state when data is inputted
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSpeciesFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    //Function to send POST request of new species entry
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/tracker/species', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(speciesFormData)
            });

            if(!response.ok) {
                throw new Error("Error with species submission");
            } else {
                setShowModal(true);
            }
            
        } catch (error) {
            console.error({ message: "Error submitting new species", details: error })
            alert("We're sorry, there was an error submitting new species. Please try again or submit a ticket.");
        } finally {
            clearForm();
        }
    }

    //Function to clear form after submission or canceling changes
    const clearForm = () => {
        setSpeciesFormData({
            "common_name": "",
            "scientific_name": "",
            "amount_living": "",
            "status_code": ""
        })
    }

    //State to show/hide the modal
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <h2 className="text-center">Species Form</h2>
            <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <Form.Label htmlFor="common-name">Common Name: </Form.Label>
                    <input
                        id="common-name"
                        name="common_name"
                        type="text"
                        placeholder="Enter Common Name"
                        required
                        value={speciesFormData["common_name"]}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <Form.Label htmlFor="scientific-name">Scientific Name: </Form.Label>
                    <input
                        id="scientific-name"
                        name="scientific_name"
                        type="text"
                        placeholder="Enter Scientific Name"
                        required
                        value={speciesFormData["scientific_name"]}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <Form.Label htmlFor="amount">Amount Living: </Form.Label>
                    <input
                        id="amount"
                        name="amount_living"
                        type="text"
                        placeholder="Estimate of Amount Living"
                        value={speciesFormData["amount_living"]}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <Form.Label htmlFor="code">Status Code</Form.Label>
                    <input
                        id="code"
                        name="status_code"
                        type="text"
                        placeholder="Status Code"
                        value={speciesFormData["status_code"]}
                        onChange={handleChange}
                    />
                </div>

                <Button className="me-2" type="submit">Submit New Species</Button>
                
                <Button type="button" onClick={clearForm}>Cancel</Button>            
            </Form>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Body>Thank you for submitting a new species!</Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setShowModal(false)}>Close Message</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SpeciesForm