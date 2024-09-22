//Import necessary functionalities
import React from 'react';
import Card from 'react-bootstrap/Card';

const SightingsCard = (sighting) => {
    
    //Convert date information and record stamp maybe
    //NOTE: DO THIS IF NEED OTHERWISE DELETE COMMENT
    // console.log(sighting);

    return (
        <Card>
           <Card.Body>
                {/* Double check that nickname is an element! Might be individual.nickname?? */}
                <Card.Title>{sighting.sighting.animal_id}: {sighting.sighting.nickname}</Card.Title>

                <Card.Text>
                    Date & Time: {sighting.sighting.date_time}<br />
                    Location: {sighting.sighting.location}<br />
                    Health Status: {sighting.sighting.healthy ? "Healthy" : sighting.sighting.healthy === false ? "Not Healthy" : "Unknown"}<br />
                    Sighter's Email: {sighting.sighting.sighter_email}<br />
                    Record Creation Timestamp: {sighting.sighting.created_at}
                </Card.Text>
           </Card.Body>
        </Card>
    )
}

export default SightingsCard;