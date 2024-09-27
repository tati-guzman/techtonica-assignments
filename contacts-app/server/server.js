//Import frameworks for app and middleware
import express from 'express';
import cors from 'cors';

// //Import database connection
import db from './db/db-connection.js';

//Standard set-up operations for Express and Node
const app = express();
const PORT = process.env.PORT || 8020;
app.use(cors());
app.use(express.json());

//GET Route to pull all contacts and "recents" data
//'/contacts'
app.get('/contacts', async (req, res) => {
    try {
        const queryStatement = 'SELECT contacts.user_id, name, phone, email, birthday_notes, recent FROM contacts LEFT JOIN recents ON contacts.user_id = recents.user_id';
        const contactInfo = await db.query(queryStatement);
        res.json(contactInfo.rows);
    } catch (error) {
        res.status(500).json({ error: "Could not pull contact info", details: error });
    }
});

//GET Route to pull all reminders
//'/reminders/'
//To be used once reminders functionality is implemented!
app.get('/reminders', async (req, res) => {
    try {
        const allReminders = await db.query('SELECT * FROM reminders');
        res.json(allReminders.rows);
    } catch (error) {
        res.status(500).json({ error: "Could not fetch all reminders", details: error });
    }
});

//POST Route to create a new contact
//'/contacts/'
app.post('/contacts', async (req, res) => {
    console.log("Creating new contact!")
    
    try {
        //Print request into the console
        console.log(req.body);

        //Deconstruct the request into individual elements
        const { name, phone, email, birthday_notes, recent } = req.body;

        //Create SQL query string
        const contactsQuery = 'INSERT INTO contacts (name, phone, email, birthday_notes) VALUES ($1, $2, $3, $4) RETURNING user_id';

        //Send query to create new contact
        const response = await db.query(contactsQuery, [name, phone, email, birthday_notes]);
        console.log('Response:', response);

        //Error handling if it gets stuck creating a new contact
        if (!response.rows && response.rows.length < 1) {
            res.status(500).json({ error: "Error creating new contact. Failed to retrieve user ID" });
        }

        const newContact = response.rows[0].user_id;

        const createRecentStatus = await db.query('INSERT INTO recents (user_id, recent) VALUES ($1, $2)', [newContact, recent]);

        //Error handling if it gets stuck adding recent status
        if (createRecentStatus.rowCount === 0) {
            res.status(500).json({ error: "Error creating recent status." });
        }

        res.status(200).json({ message: "New contact created", user_id: newContact });        
    } catch (error) {
        res.status(500).json({ error: "Could not create new contact", details: error });
    }
});

//POST Route to create new reminders
//'/reminders/'

//POST Route to create new recent status
//'/recents/'

//PUT Route to update existing contact
//'/contacts/:user_id'

//PUT Route to update reminders
//'/contacts/:reminder_id'

//PUT Route to update recent status
//'/contacts/:user_id'

//DELETE Route to delete a contact
//'/contacts/'

//Print PORT location when active PORT is detected (server is running properly)
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
