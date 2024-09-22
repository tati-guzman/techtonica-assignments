//Import necessary functionalities and components
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const IndividualsForm = ({ selectedIndividual, setSelectedIndividual, setAllIndividuals, allIndividuals}) => {

    //Set useStates to track different form inputs
    const [animalID, setAnimalID] = useState("");
    const [nickname, setNickname] = useState("");
    const [commonName, setCommonName] = useState("");
    const [scientist, setScientist] = useState("");

    //Update all form states if there is a selected individual to update
    useEffect(() => {
        if (selectedIndividual) {
            setAnimalID(selectedIndividual.animal_id);
            setNickname(selectedIndividual.nickname);
            setCommonName(selectedIndividual.common_name);
            setScientist(selectedIndividual.scientist_name);
        }
    }, [selectedIndividual]);

    //Function to either send PUT or POST request for submission of information
    const handleSubmit = async (e) => {
        e.preventDefault();

        const submission = { animalID, nickname, commonName, scientist };

        try {
            if (selectedIndividual) {
                const response = await fetch(`/tracker/individuals/${animalID}`, {
                    method: 'PUT',
                    headers: { 'Content-Type' : 'application/json' },
                    body: JSON.stringify(submission)
                });

                if(!response.ok) {
                    throw new Error("Failed to update individual info");
                }

                const updatedIndividual = await response.json();
                setAllIndividuals(prev =>
                    prev.map(individual => 
                        individual.animal_id === updatedIndividual.animal_id ? updatedIndividual : individual));
            } else {
                const response = await fetch(`/tracker/individuals/${animalID}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(submission)
                });

                if (!response.ok) {
                    throw new Error("Failed to create new individual");
                }

                const newIndividual = await response.json();
                setAllIndividuals(prev => [...prev, newIndividual]);
            }
        } catch (error) {
            console.error({ message: "Unable to submit information", details: error });
            alert("We are having trouble submitting this information. Please try again.");
        } finally {
            clearForm();
        }
    }

    //Function clear form in case of submission or cancellation
    const clearForm = () => {
        //Reset states to original
        setAnimalID("");
        setNickname("");
        setCommonName("");
        setScientist("");

        if (selectedIndividual) {
            setSelectedIndividual(null);
        }
    }

    return (
        <Form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <Form.Label htmlFor="animal-id">Animal ID:</Form.Label>
                <input
                    id="animal-id"
                    name="animal_id"
                    type="text"
                    placeholder="Enter Animal ID"
                    required
                    value={animalID}
                    onChange={(e) => setAnimalID(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <Form.Label htmlFor="nickname">Individual's Nickname:</Form.Label>
                <input
                    id="nickname"
                    name="nickname"
                    type="text"
                    placeholder="Enter Nickname (if chosen)"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                />
            </div>
            

            <div className="mb-3">
                <Form.Label htmlFor="common-name">Common Name:</Form.Label>
                <input
                    id="common-name"
                    name="common_name"
                    type="text"
                    placeholder="Enter Common Name"
                    required
                    value={commonName}
                    onChange={(e) => setCommonName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <Form.Label htmlFor="scientist">Primary Scientist:</Form.Label>
                <input
                    id="scientist"
                    name="scientist_name"
                    type="text"
                    placeholder="Enter Primary Scientist (if assigned)"
                    value={scientist}
                    onChange={(e) => setScientist(e.target.value)}
                />
            </div>

            <Button className="me-2" type="submit">
                {selectedIndividual ? "Update Individual" : "Create Individual"}
            </Button>
            
            <Button type="button" onClick={clearForm}>Cancel</Button>
        </Form>
    )
}

export default IndividualsForm