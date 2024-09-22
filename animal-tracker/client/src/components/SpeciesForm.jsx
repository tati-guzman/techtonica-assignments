//Import necessary functionalities and components
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const SpeciesForm = () => {
    
    //State to hold all form data in an object
    const [speciesFormData, setSpeciesFormData] = useState({
        "common_name": "",
        "scientific_name": "",
        "amount_living": "",
        "status_code": "",
    })

    //Function to update form state when data is inputted
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSpeciesFormData(prevFormData => ({ ...prevFormData, [name]: value }));
    }

    return (
        <Form onSubmit={handleSubmit}>
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

            <Form.Label htmlFor="amount">Amount Living: </Form.Label>
            <input
                id="amount"
                name="amount_living"
                type="text"
                placeholder="Estimate of Amount Living"
                value={speciesFormData["amount_living"]}
                onChange={handleChange}
            />

            <Form.Label htmlFor="code">Status Code</Form.Label>
            <input
                id="code"
                name="status_code"
                type="text"
                placeholder="Status Code"
                value={speciesFormData["status_code"]}
                onChange={handleChange}
            />
            </Form>
    )
}

export default SpeciesForm