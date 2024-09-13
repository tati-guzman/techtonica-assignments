import React, { useState, useEffect, useReducer } from 'react'
// import * as ioicons from 'react-icons/io5'
import MyForm from './Form.jsx';
import Event from './Event.jsx';

const EventList = () => {

    //State to track events received from database
    const [events, setEvents] = useState([]);

    //If Events change, re-load all of the events by fetching all rows from events table
    const loadEvents = () => {
        fetch("/events")
            .then((response) => response.json())
            .then((list) => {
                console.log(list);
                setEvents(list);
            });
    }

    //If the events change at all, run the loadEvents function to re-fetch all current events
    useEffect(() => {
        loadEvents();
    }, [events]);

    //Track event being edited via state
    const [editEvent, setEditEvent] = useState(null)

    // //Update Event Function
    // const onUpdate = (toUpdateStudent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingStudent(toUpdateStudent);
    // }

     //Update Event Function
     const startUpdate = (eventToUpdate) => {
        
        //console.log(toUpdateStudent);
        // setEditEvent(eventToUpdate);
        // console.log(editEvent);
    }

    // const onSaveStudent = (newStudent) => {
    //     //console.log(newStudent, "From the parent - List of Students");
    //     setStudents((students) => [...students, newStudent]);
    // }


    // //A function to control the update in the parent (student component)
    // const updateStudent = (savedStudent) => {
    //     // console.log("Line 29 savedStudent", savedStudent);
    //     // This function should update the whole list of students - 
    //     loadStudents();
    // }

    // //A function to handle the Delete funtionality
    // const onDelete = (student) => {
    //     //console.log(student, "delete method")
    //     return fetch(`http://localhost:8080/api/students/${student.id}`, {
    //         method: "DELETE"
    //     }).then((response) => {
    //         //console.log(response);
    //         if (response.ok) {
    //             loadStudents();
    //         }
    //     })
    // }

    

    

    return (
        <div className="mybody">
            <div className="list-events">
                <h2>Techtonica Events</h2>
                    <ul>
                        {events.map((event) => {
                            // return <li key={event.id}> <Event event={event} toDelete={onDelete} toUpdate={onUpdate} /></li>
                            return <li key={event.id}> <Event event={event} toUpdate={startUpdate}/></li>
                        })}
                    </ul>
            </div>
{/* 
            <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} /> */}
        </div>
    );
}


export default EventList