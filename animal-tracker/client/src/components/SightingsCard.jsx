//Import necessary functionalities
import React from 'react';
import Card from 'react-bootstrap/Card';

const SightingsCard = (sighting) => {
    
    //Convert date information and record stamp maybe
    //NOTE: DO THIS IF NEED OTHERWISE DELETE COMMENT

    return (
        <Card>
           <Card.Body>
                {/* Double check that nickname is an element! Might be individual.nickname?? */}
                <Card.Title>{sighting.animal_id}: {sighting.nickname}</Card.Title>

                <Card.Text>
                    <p>Date & Time: {sighting.date_time}</p>
                    <p>Location: {sighting.location}</p>
                    <p>Health Status: {sighting.healthy ? "Healthy" : "Not Healthy"}</p>
                    <p>Sighter's Email: {sighting.sighter_email}</p>
                    <p>Record Creation Timestamp: {sighting.created_at}</p>
                </Card.Text>
           </Card.Body>
        </Card>
    )
}

export default SightingsCard;