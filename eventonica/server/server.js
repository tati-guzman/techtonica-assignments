import express from 'express';
import cors from 'cors';

//Line 5 should be used when creating db connection file - NEED TO UPDATE
// import db from './db/db-connection.js';

//Potentially only needed in db-connection file once that is used.
import dotenv from 'dotenv';
dotenv.config();

//Import Pool class from pg package to use for connection pooling -> potentially only needed in db-connection once fixed.
import pkg from 'pg';
const { Pool } = pkg;

//Link to connection string for database using the secret .env path (this chunk of code SHOULD be in db-connection but not working rn, FIX LATER)
const db = new Pool({
    connectionString: process.env.DB_URI
});


//Standard set-up operations for Express and Node
const app = express();
const PORT = process.env.PORT || 8011;
app.use(cors());
app.use(express.json());

//Creates Welcome Message for Root Directory
app.get('/', (req, res) => {
    res.json("Welcome to Eventonica!");
    console.log("Made it to main page");
});

//Create GET route to show all events
app.get('/events', async (req, res) => {

    console.log("In the events page!");
    
    db.query('SELECT * FROM events', (err, results) => {
        if (err) {
            res.send({Error: err})
            console.error(err);
            return; 
        }
        console.log("GET Route worked! Woohoo!");
        res.json(results.rows);
    });
});


//Create POST Request to submit and create a new event
app.post('/events', async (req, res) => {
    console.log("Making a new event...");
        
    try {
        //Print request into console
        console.log(req.body)
        
        //Deconstruct the request into individual elements
        const { title, category, description, location, date, time, favorite } = req.body;

        //Create SQL query string
        const query = 'INSERT INTO events (title, category, description, location, date, time, favorite) VALUES ($1, $2, $3, $4, $5, $6, $7)';

        //Send data query with variables to database
        await db.query(query, [title, category, description, location, date, time, favorite]);
        
        //Let user know that the event was created successfully
        res.json({ message: 'Event created successfully'});
        return;
    } catch (error) {
        res.status(500).json({ error: 'Error creating event', details: error });
    }
});


//Create DELETE Route to delete entire events
app.delete('/events/:eventid', async (req, res) => {
    console.log("We are deleting this event soon.");
    console.log(req.params);
    //Pull appropriate event ID from the request
    const eventid = req.params.eventid;

    try {
        //Create query statement
        const deletionStatement = `DELETE FROM events WHERE eventid= ${eventid}`;
        await db.query(deletionStatement);
        console.log("Event has been deleted");
        res.json({ message: `Successfully deleted event ${eventid}`});
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: "Could not delete event", details: error});
    }
});


//A put request - Update a student 
app.put('/api/students/:studentId', async (req, res) =>{
    //console.log(req.params);
    //This will be the id that I want to find in the DB - the student to be updated
    const studentId = req.params.studentId
    const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
    console.log("In the server from the url - the student id", studentId);
    console.log("In the server, from the react - the student to be edited", updatedStudent);
    // UPDATE students SET lastname = "something" WHERE id="16";
    const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
    const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
    try {
      const updated = await db.query(query, values);
      console.log(updated.rows[0]);
      res.send(updated.rows[0]);
  
    }catch(e){
      console.log(e);
      return res.status(400).json({e})
    }
  })

//Print PORT location when active PORT is detected (server is running)
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});