//Import necessary functionalities
import React, { useState, useEffect, useReducer } from 'react'
import { Button, Form } from 'react-bootstrap'

const EventForm = ({ editEvent }) => {
    
    const [event, setEvent] = useState(editEvent || {
        title: "",
        category: null,
        description: "",
        location: "",
        date: "",
        time: "",
        favorite: false
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEvent((eventData) => ({...eventData, [name]: value}));
    }

    const clearForm = () => {
        setEvent({
            title: "",
            category: null,
            description: "",
            location: "",
            date: "",
            time: "",
            favorite: false
        })
    }

    const handleSubmit = () => {

    }

    return (
        <Form className='event-form' onSubmit={handleSubmit}>
            <h2>Edit or Add Events:</h2>
            
            <Form.Label for="event-name">Event Name</Form.Label>
            <input 
                id="event-name"
                name="title"
                type="text"
                placeholder="Event Name"
                required
                value={event.title}
                onChange={handleChange}
            />

            <Form.Label for="category">Category</Form.Label> 
                <select id="category" name="category" value={event.category} onChange={handleChange} required>
                    <option disabled value=""></option>
                    <option value="Networking">Networking</option>
                    <option value="Application Events">Application Events</option>
                    <option value="Mock Interviews">Mock Interviews</option>
                    <option value="Study Group">Study Group</option>
                    <option value="Cohort Milestone">Cohort Milestone</option>
                    <option value="Social/Celebration">Social/Celebration</option>
                    <option value="Volunteers">Volunteers</option>
                    <option value="Miscellaneous">Miscellaneous</option>
                </select>
            

            <Form.Label for="description">Event Description</Form.Label>
            <input 
                id="description"
                name="description"
                type="text"
                placeholder="Event Description"
                required
                value={event.description}
                onChange={handleChange}
            />

            <Form.Label for="location">Event Location</Form.Label>
            <input 
                id="location"
                name="location"
                type="text"
                placeholder="Event Location"
                required
                value={event.location}
                onChange={handleChange}
            />

            <Form.Label for="date">Date</Form.Label>
            <input 
                id="date"
                name="date"
                type="date"
                value={event.date}
                onChange={handleChange}
            />

            <Form.Label for="time">Time</Form.Label>
            <input 
                id="time"
                name="time"
                type="time"
                value={event.time}
                onChange={handleChange}
            /> 

            <Button type="submit" variant="outline-success" onSubmit={handleSubmit}>
                {event.eventid ? "Edit Event" : "Add Event"}
            </Button>

            <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button>
            
        </Form>
    )
}

export default EventForm