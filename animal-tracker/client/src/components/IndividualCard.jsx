//Import necessary functionalities
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const IndividualCard = ({ individual, setSelectedIndividual, setAllIndividuals }) => {

    const correctDate = individual.created_at ? new Date(individual.created_at).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }) : 'TBD';

    //Function to delete the record of the card that had the button pushed
    const handleDelete = async () => {
        try {
            const response = await fetch(`/tracker/individuals/${individual.animal_id}`, {
                method: 'DELETE'
            });
            
            if(!response.ok) {
                throw new Error("Failed to delete individual");
            }

            //Now that it's deleted on the back end, filter it out on display
            setAllIndividuals(prevList => prevList.filter((item) => item.animal_id != individual.animal_id));

        } catch(error) {
            console.error({ message: "Error deleting individual", details: error });
            alert("Looks like this one is not ready to go! We are having trouble deleting this individual. Please try again.")
        }
    }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{individual.animal_id}: {individual.nickname}</Card.Title>

                <Card.Text>
                    Species: {individual.common_name}<br />
                    Primary Scientist: {individual.scientist_name}<br />
                    Record Creation Timestamp: {correctDate}
                </Card.Text>

                <Button className="me-2" onClick={() => {setSelectedIndividual(individual)}}>Update Info</Button>
                <Button onClick={handleDelete}>Delete Individual</Button>
            </Card.Body>
        </Card>
    )
}

export default IndividualCard