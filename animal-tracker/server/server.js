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

//Create GET Request for Sightings Table including nickname from Individuals Table (JOIN)
//'/tracker/sightings'

//Create GET Request for Individuals Table (all information from table)
//'/tracker/individuals'

//Create DELETE Request to remove a specified individual from Individuals Table
//'/tracker/individuals/:animal_id'

//Create POST Request to create a new individual in the Individuals Table
//'/tracker/individuals/:animal_id'
//Reminder to RETURNING * to send back all rows to display in table

//Create PUT Request to update individual in the Individuals Table
//'/tracker/individuals/:animal_id'
//Reminder to RETURNING * to show all rows in display

//Create POST Request to create new species record in Species Table
//'/tracker/species'

//Create POST Request to create new sighting record in Sightings Table
//'/tracker/sightings'

//Print PORT location when active PORT is detected (server is running properly)
app.listen(PORT, () => {
    console.log(`Welcome to Animal Tracker! Server is listening on PORT: ${PORT}`);
});