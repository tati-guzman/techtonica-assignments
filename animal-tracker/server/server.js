//Import frameworks for app and middleware
import express from 'express';
import cors from 'cors';

//Import database connection
import db from './db/db-connection.js';

//Standard set-up operations for Express and Node
const app = express();
const PORT = process.env.PORT || 8020;
app.use(cors());
app.use(express.json());

//Create Welcome Message for Root Directory
//GET Request for '/tracker'
app.get('/tracker', (req, res) => {
    res.json("Welcome to Animal Tracker!");
    console.log("Made it main page");
});

//Create GET Request for Sightings Table including nickname from Individuals Table (JOIN)
//'/tracker/sightings'
app.get('/tracker/sightings', async (req, res) => {
    try {
        const allSightings = await db.query('SELECT sightings.date_time, sightings.animal_id, individuals.nickname, sightings.location, sightings.healthy, sightings.sighter_email, sightings.created_at FROM sightings JOIN individuals ON sightings.animal_id = individuals.animal_id');
        res.json(allSightings.rows);
    } catch (error) {
        res.status(500).json({ error: "Could not get all sightings", details: error });
    }
});

//Create GET Request for Individuals Table (all information from table)
//'/tracker/individuals'
app.get('/tracker/individuals', async (req, res) => {
    try {
        const allIndividuals = await db.query('SELECT * FROM individuals');
        res.json(allIndividuals.rows);
    } catch (error) {
        res.status(500).json({ error: "Could not get all individual information", details: error });
    }
});

//Create DELETE Request to remove a specified individual from Individuals Table
//'/tracker/individuals/:animal_id'
app.delete('/tracker/individuals/:animal_id', async (req, res) => {
    console.log("We will be deleting this individual soon.");
    console.log(req.params);

    //Pull actual ID from the request parameters
    const animal_id = req.params.animal_id;

    try {
        const deletionStatement = 'DELETE FROM individuals WHERE animal_id = $1';
        await db.query(deletionStatement, [animal_id]);
        console.log("Individual has been deleted");
        res.json({ message: `Successfully deleted individual ${animal_id}`});
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: "Could not delete individual", details: error });
    }
});


//Create POST Request to create a new individual in the Individuals Table
//'/tracker/individuals/:animal_id'
//Reminder to RETURNING * to send back all rows to display in table
app.post('/tracker/individuals/:animal_id', async (req, res) => {
    console.log("Creating a new individual now!");

    try {
        //Print request into console
        console.log(req.body);

        //Deconstruct the request into individual elements
        const { animalID, nickname, commonName, scientistName } = req.body;

        //Create SQL query string
        const queryStatement = 'INSERT INTO individuals (animal_id, nickname, common_name, scientist_name) VALUES ($1, $2, $3, $4) RETURNING *';

        //Send query with all relevant variables
        const response = await db.query(queryStatement, [animalID, nickname, commonName, scientistName]);

        //Error handling if it gets stuck at this point
        if (!response.rows && response.rows.length < 1) {
            res.status(500).json({ error: "Error creating new individual. Failed to retrieve any data."});
        }

        const newIndividual = response.rows[0];

        //Let user know that the individual was created successfully
        res.json({ message: 'Individual added successfully', newIndividual });
        return;
    } catch (error) {
        res.status(500).json({ error: "Error creating new individual.", details: error });
    }
});

//Create PUT Request to update individual in the Individuals Table
//'/tracker/individuals/:animal_id'
//Reminder to RETURNING * to show all rows in display
app.put('/tracker/individuals/:animal_id', async (req, res) => {
    console.log("We will update this individual's info soon.");
    console.log(req.params);
    //Pull appropriate animal ID from request
    const animalID = req.params.animal_id;
    console.log(req.body);
    //Piece apart request details to only update what was sent in
    const fields = ['animal_id', 'nickname', 'common_name', 'scientist_name']
    console.log(fields);
    const values = Object.values(req.body);

    //Make sure request is not empty
    if (fields.length === 0) {
        res.status(400).json({ error: "No fields to updates" });
        return;
    }

    //Create query statement
    const queryInsert = fields.map((field, index) => `"${field}" = $${index + 1}`).join(", ");
    const query = `UPDATE individuals SET ${queryInsert} WHERE animal_id=$${fields.length + 1} RETURNING *`;

    try {
        //Send query with attached values
        const updatedIndividual = await db.query(query, [...values, animalID]);
        console.log({message: "Update was successful", details: updatedIndividual.rows[0]});
        res.json(updatedIndividual.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Could not update individual", details: error });
    }
});

//Create POST Request to create new species record in Species Table
//'/tracker/species'
app.post('/tracker/species', async (req, res) => {
    console.log("Creating new species record!");

    try {
        //Print request into console
        console.log(req.body);

        //Deconstruct the request into individual elements
        const { common_name, scientific_name, amount_living, status_code } = req.body;

        //Create SQL query string
        const queryStatement = 'INSERT INTO species (common_name, scientific_name, amount_living, status_code) VALUES ($1, $2, $3, $4)';

        //Send query with all relevant variables
        const response = await db.query(queryStatement, [common_name, scientific_name, amount_living, status_code]);

        //Error handling if it gets stuck at this point
        if (!response.rows && response.rows.length < 1) {
            res.status(500).json({ error: "Error creating new species. Failed to retrieve any data."});
        }

        const newSpecies = response.rows[0];

        //Let user know that the individual was created successfully
        res.json({ message: 'Species added successfully', newSpecies });
        return;
    } catch (error) {
        res.status(500).json({ error: "Error creating new species record.", details: error });
    }
});

//Create POST Request to create new sighting record in Sightings Table
//'/tracker/sightings'
app.post('/tracker/sightings', async (req, res) => {
    console.log("Creating new sighting!");

    try {
        //Print request into console
        console.log(req.body);

        //Deconstruct the request into individual elements
        const { date_time, animal_id, location, healthy, sighter_email } = req.body;

        //Create SQL query string
        const queryStatement = 'INSERT INTO sightings (date_time, animal_id, location, healthy, sighter_email) VALUES ($1, $2, $3, $4, $5)';

        //Send query with all relevant variables
        const response = await db.query(queryStatement, [date_time, animal_id, location, healthy, sighter_email]);

        //Error handling if it gets stuck at this point
        if (!response.rows && response.rows.length < 1) {
            res.status(500).json({ error: "Error creating new sighting. Failed to retrieve any data."});
        }

        const newSighting = response.rows[0];

        //Let user know that the individual was created successfully
        res.json({ message: 'Sighting added successfully', newSighting });
        return;
    } catch (error) {
        res.status(500).json({ error: "Error creating new sighting.", details: error });
    }
});

//Print PORT location when active PORT is detected (server is running properly)
app.listen(PORT, () => {
    console.log(`Welcome to Animal Tracker! Server is listening on PORT: ${PORT}`);
});