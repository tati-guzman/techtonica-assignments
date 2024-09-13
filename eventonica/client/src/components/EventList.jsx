import React, { useState, useEffect, useReducer } from 'react'
// import * as ioicons from 'react-icons/io5'
import MyForm from './Form.jsx';
import Event from './Event.jsx';

const EventList = () => {

    // this is my original state with an array of students 
    // const [students, setStudents] = useState([]);

    const [events, setEvents] = useState([]);

    //this is the state needed for the UpdateRequest
    // const [editingStudent, setEditingStudent] = useState(null)

    const loadEvents = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("/events")
            .then((response) => response.json())
            .then((list) => {
                console.log(list);
                setEvents(list);
            });
    }

    useEffect(() => {
        loadEvents();
    }, [events]);

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

    //A function to handle the Update functionality
    // const onUpdate = (toUpdateStudent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingStudent(toUpdateStudent);

    // }

    

    return (
        <div className="mybody">
            <div className="list-events">
                <h2>Techtonica Events</h2>
                    <ul>
                        {events.map((event) => {
                            // return <li key={event.id}> <Event event={event} toDelete={onDelete} toUpdate={onUpdate} /></li>
                            return <li key={event.id}> <Event event={event} /></li>
                        })}
                    </ul>
            </div>
{/* 
            <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} /> */}
        </div>
    );
}


export default EventList