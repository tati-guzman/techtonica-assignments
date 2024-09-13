import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

// const Event = ({event, toUpdate, toDelete}) => {
const Event = ({event, toUpdate}) => {
    // const onUpdate = (toUpdateStudent) => {
    //     toUpdate(toUpdateStudent)
    // }

    // const startUpdate = (eventToUpdate) => {
    //     toUpdate(eventToUpdate);
    // }

    // const onDelete = (toDeleteStudent) => {
    //     toDelete(toDeleteStudent)
    // }

    return (
        <Card>
            <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                
                <Card.Text>
                    <p>{event.description}</p>
                    <p>Category: {event.category}</p>
                    <p>Location: {event.location}</p>
                    <p>Date: {event.date}</p>
                    <p>Time: {event.time}</p>
                </Card.Text>

                {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button> */}
                
                <Button variant="outline-info" onClick={() => toUpdate(event.id)} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Event;