import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Event = ({ event, dispatch, setSelectedEvent }) => {
    
    const correctDate = event.date ? new Date(event.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }) : 'TBD';

    const handleDelete = async () => {
        try {
            await fetch(`/events/${event.eventid}`, {
                method: 'DELETE'
            })
            dispatch({ type: 'DELETE_EVENT', payload: event.eventid });
        } catch (error) {
            console.error({ message: "Error deleting event", details: error });
        }
    }


    return (
        <Card key={event.eventid}>
            <Card.Body>
                <Card.Title >{event.title}</Card.Title>
                
                <Card.Text>
                    <p>{event.description}</p>
                    <p>Category: {event.category}</p>
                    <p>Location: {event.location}</p>
                    <p>Date: {correctDate || 'TBD'}</p>
                    <p>Time: {event.time || 'TBD'}</p>
                </Card.Text>

                <Button variant="outline-danger" onClick={()=>{handleDelete()}} style={{padding: '0.6em', marginRight:'0.9em'}}>Delete Event<ioicons.IoTrash/></Button>
                
                <Button variant="outline-info" onClick={() => {setSelectedEvent(event)}} style={{padding: '0.6em'}}>Edit Event</Button>
            </Card.Body>
        </Card>
    )

}

export default Event;