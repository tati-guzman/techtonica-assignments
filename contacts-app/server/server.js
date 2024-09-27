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
// app.post('/contacts', async (req, res) => {
//     try {

//     } catch (error) {
//         res.status(500).json({ error: "Could not create new contact", details: error });
//     }
// });

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
