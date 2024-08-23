import express from 'express';
import cors from 'cors';
// import webkinz from './webkinz.js';
import pkg from 'pg';

const app = express();
const PORT = 5001;

//Configuring cors middleware
app.use(cors());

//Make it use the express parser
app.use(express.json());

//Configure bodyparser to know how to read the data more clearly
// const bodyParser = require("body-parser");
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// var urlencodedParser = bodyParser.urlencoded({extended: false});

//Require postgres to create a Pool. This connects to the database.
const { Pool } = pkg;

const data = new Pool({
    user: 'tpl622_1',
    host: 'localhost',
    database: 'webkinz',
    password: 'postgres',
    port: 5432
})

//In the future, use these instead to keep these secret and store the stuff in env files
// const secretPool = new Pool({
//     user: process.env.DB_USER,          
//     host: process.env.DB_HOST,          
//     database: process.env.DB_NAME,      
//     password: process.env.DB_PASSWORD,  
//     port: process.env.DB_PORT,    
// });

//Create Welcome Message for Root Directory
app.get('/', (req, res) => {
    res.json("Welcome to my Webkinz Page! Navigate to '/webkinz' to see the list of Webkinz!")
    console.log("Made it to the main page");
})

//Need to practice the four CRUD operations: GET, POST, PUT, DELETE

//Create GET route to show all Webkinz
app.get('/webkinz', async (req, res) => {

    console.log("In the Webkinz page!");
    
    data.query('SELECT * FROM animals ORDER BY id ASC', (err, results) => {
        if (err) {
            console.error(err);
            return; 
        }
        console.log("GET Route worked! Woohoo!");
        res.json(results.rows);
    });
});


//Create POST Route to submit new Webkinz data
app.post('/webkinz', async (req, res) => {
    console.log("Making a new animal...");
        
    try {
        console.info(req.body)
        const { id, name, type, color, release_year, description } = req.body;
        console.info("name", name)
        const query = 'INSERT INTO animals (id, name, type, color, release_year, description) VALUES ($1, $2, $3, $4, $5, $6)';
        await data.query(query, [id, name, type, color, release_year, description]);
        res.json({ message: 'Animal created successfully'});
        return;
    } catch (error) {
        res.status(500).json({ error: 'Error creating item', details: error });
    }
    });

//Create PUT Route to update a specific animal via their id

app.put('/webkinz/:id', async (req, res) => {
    console.log("PUT Request: Updating one of the current animals!");
    const id = req.params.id;

    try {
        const fields = Object.keys(req.body);
        const values = Object.values(req.body);

        if (fields.length === 0) {
            res.status(400).json({ error: 'No fields to update'});
            return;
        }

        const queryInsert = fields.map((field, index) => `"${field}" = $${index + 1}`).join(', ');
        const query = `UPDATE animals SET ${queryInsert} WHERE id = ${id}`;
        
        await data.query(query, values);
        res.json({ message: 'Update was successful'});
        return;
    } catch (error) {
        res.status(500).json({ error: 'Error updating item', details: error });
    }
    });

//Create DELETE Route to remove a whole row from the table via the id
app.delete('/webkinz/:id', async (req, res) => {
    console.log("We'll be deleting this animal soon! Good riddance!");
    const id = req.params.id;

    try {
        const deletionStatement = `DELETE FROM animals WHERE id = ${id}`;
        await data.query(deletionStatement);
        res.json({message: 'Bye bye animal! It\'s been deleted!'});
        return;
    } catch (error) {
        res.status(500).json({ error: 'Could not delete animal', details: error });
    }
});

//Print welcome message when active PORT is detected
app.listen(PORT, () => console.log(`Welcome to a blast from the past! This server is running on http://localhost:${PORT}`));