import React, { useState, useEffect, useReducer } from 'react'
import EventForm from './Form.jsx';
import Event from './Event.jsx';
import Search from './Search.jsx';

const EventList = () => {

    const initialState = { events: [] };

    function reducer(state, action) {
        switch (action.type) {
            case 'SET_EVENTS':
                return { ...state, events: action.payload };
            case 'ADD_EVENT':
                return { ...state, events: [...state.events, action.payload] };
            case 'DELETE_EVENT':
                return { ...state, events: state.events.filter(event => event.eventid !== action.payload) };
            case 'UPDATE_EVENT':
                return { ...state, events: state.events.map(event => event.eventid === action.payload.eventid ? action.payload : event) };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const response = await fetch('/events');
                if (!response.ok) {
                    throw new Error('Failed to fetch events');
                }
                const data = await response.json();
                dispatch({ type: 'SET_EVENTS', payload: data });
            } catch (error) {
                console.error({ message: "Error loading event list", details: error });
            }
        };

        loadEvents();
    }, []);

    const filteredEvents = state.events.filter(event =>
        (event.title?.toLowerCase() || '').includes(searchQuery.toLowerCase()) ||
        (event.category?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    );
    
    const handleUpdate = async (updatedEvent) => {
        try {
            const response = await fetch(`/events/${updatedEvent.eventid}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedEvent)
            });

            if (!response.ok) {
                throw new Error('Failed to update event');
            }

            const data = await response.json();
            dispatch({ type: 'UPDATE_EVENT', payload: data });
            setSelectedEvent(null);
        } catch (error) {
            console.error({ message: "Error updating this event", details: error });
        }
    };

    return (
        <div className="mybody">
            
            <div className="list-events">
                <h2>Techtonica Events</h2>
                {filteredEvents.map((event) => (
                        <Event event={event} setSelectedEvent={setSelectedEvent} dispatch={dispatch}/>
                ))}
            </div>

            <EventForm dispatch={dispatch} selectedEvent={selectedEvent} setSelectedEvent={setSelectedEvent} onUpdate={handleUpdate} />

            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>
    );
}


export default EventList