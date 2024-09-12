import express from 'express';
import cors from 'cors';

//Import database connection
import db from './db/db-connection.js';

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


//Create PUT Route to update a specific event via its id
app.put('/events/:eventid', async (req, res) => {
    console.log("We will update this event soon.");
    
    console.log(req.body);
    console.log(req.params);

    //Pull appropriate event ID from the request
    const eventid = req.params.eventid;

    try {
        //Piece apart request details to only update what was sent in
        const fields = Object.keys(req.body);
        const values = Object.values(req.body);

        //Make sure request is not empty
        if (fields.length === 0) {
            res.status(400).json({ error: "no fields to update" });
            return;
        }

        //Create query statement
        const queryInsert = fields.map((field, index) => `"${field}" = $${index + 1}`).join(", ");
        const query = `UPDATE events SET ${queryInsert} WHERE eventid = ${eventid} RETURNING *`;

        //Send query with attached values
        const updatedEvent = await db.query(query, values);
        console.log({ message: "Update was successful", eventDetails: updatedEvent.rows[0] });
        res.send(updatedEvent.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Could not update event", details: error});
    }
});

//Create GET Route to select all events in a certain category
//Need to update request!
app.get('/events/:category', async (req, res) => {
    console.log("Fetching all events from this category");
    
    const category = req.params.category;

    try {
        const selectedEvents = db.query(`SELECT * FROM events WHERE category=${category}`);
        res.json(selectedEvents.rows);
    } catch (error) {
        res.status(500).json({ error: "Could not get events", details: error });
    }
});



//Print PORT location when active PORT is detected (server is running)
app.listen(PORT, () => {
    console.log(`Server listening on PORT: ${PORT}`);
});