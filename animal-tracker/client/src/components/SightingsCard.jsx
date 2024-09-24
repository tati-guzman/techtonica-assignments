//Import necessary functionalities
import React from 'react';
import Card from 'react-bootstrap/Card';

const SightingsCard = (sighting) => {
    
    const correctDate = sighting.sighting.created_at ? new Date(sighting.sighting.created_at).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }) : 'TBD';

    const correctDateTime = sighting.sighting.date_time ? new Date(sighting.sighting.date_time).toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
    }) : 'TBD';

    return (
        <Card>
           <Card.Body>
                {/* Double check that nickname is an element! Might be individual.nickname?? */}
                <Card.Title>{sighting.sighting.animal_id}: {sighting.sighting.nickname}</Card.Title>

                <Card.Text>
                    Date & Time: {correctDateTime}<br />
                    Location: {sighting.sighting.location}<br />
                    Health Status: {sighting.sighting.healthy ? "Healthy" : sighting.sighting.healthy === false ? "Not Healthy" : "Unknown"}<br />
                    Sighter's Email: {sighting.sighting.sighter_email}<br />
                    Record Creation Timestamp: {correctDate}
                </Card.Text>
           </Card.Body>
        </Card>
    )
}

export default SightingsCard;