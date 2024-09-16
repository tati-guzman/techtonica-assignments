//Import necessary functionalities
import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'

const EventForm = ({ dispatch, selectedEvent, setSelectedEvent, onUpdate }) => {
     
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Miscellaneous');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    // const [time, setTime] = useState('');

    const formattedDate = (date) => {
        const dateInfo = new Date(date);
        return dateInfo.toISOString().split('T')[0];
    };

    useEffect(() => {
        if (selectedEvent) {
            setTitle(selectedEvent.title);
            setCategory(selectedEvent.category);
            setDescription(selectedEvent.description);
            setLocation(selectedEvent.location);
            setDate(formattedDate(selectedEvent.date));
        }
    }, [selectedEvent]);

    //Functionality for the submit button to either update or create the event
    const handleSubmit = async (e) => {
        e.preventDefault();
        const event = { title, category, description, location, date };

        
        try {
            if (selectedEvent) {
                const updatedEvent = { ...selectedEvent, ...event }
                await onUpdate(updatedEvent);
            } else {
                const response = await fetch('/events', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(event)
                });

                if (!response.ok) {
                    throw new Error("Failed to create event");
                }

                const newEvent = await response.json();
                dispatch({ type: 'ADD_EVENT', payload: newEvent });
            }
        } catch (error) {
                console.error({ message: "Unable to create event", details: error });
            } finally {
                clearForm();
            }
    }

    const clearForm = () => {
        //Reset the states to original
        setTitle('');
        setCategory('Miscellaneous');
        setDescription('');
        setLocation('');
        setDate('');

        if(selectedEvent) {
            setSelectedEvent(null);
        }
    };

    return (
        <Form className='event-form' onSubmit={handleSubmit}>
            <h2>Edit or Add Events:</h2>
            
            <Form.Label htmlFor="event-name">Event Name</Form.Label>
            <input 
                id="event-name"
                name="title"
                type="text"
                placeholder="Event Name"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Form.Label htmlFor="category">Category</Form.Label> 
                <select id="category" name="category" value={category} onChange={(e) => setCategory(e.target.value)} required>
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
            

            <Form.Label htmlFor="description">Event Description</Form.Label>
            <input 
                id="description"
                name="description"
                type="text"
                placeholder="Event Description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <Form.Label htmlFor="location">Event Location</Form.Label>
            <input 
                id="location"
                name="location"
                type="text"
                placeholder="Event Location"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />

            <Form.Label htmlFor="date">Date</Form.Label>
            <input 
                id="date"
                name="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />

            {/* <Form.Label htmlFor="time">Time</Form.Label>
            <input 
                id="time"
                name="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            />  */}

            <Button type="submit" variant="outline-success">
                {selectedEvent ? "Update Event" : "Create Event"}
            </Button>

            <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel Changes</Button>
            
        </Form>
    )
}

export default EventForm
