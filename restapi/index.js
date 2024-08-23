import express from 'express';
import cors from 'cors'; //I don't know what this does!
// import webkinz from './webkinz.js';
import pkg from 'pg';

const app = express();
const PORT = 5001;
// const bodyParser = require("body-parser");

//Configuring cors middleware - WHAT DOES THAT MEAN
app.use(cors());

//Make it use the express middleware??
app.use(express.json());

//Configure bodyparser to know how to read the data more clearly
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

//Example of a data query:
// data.query('SELECT * FROM animals', (err, res) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(res.rows[0]);
// });

// data.release;


//Use these instead to keep these secret and store the stuff in env files
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

//Need to practice the four CRUD operations: POST, GET, PUT, DELETE

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
})


//Create POST Route to submit new Webkinz data
app.post('/make-new-entry', async function (req, res) {
    console.log("Making a new animal...");

    let newAnimal = {
        id: req.body.id,
        name: req.body.name,
        type: req.body.type,
        color: req.body.color,
        release_year: req.body.release_year,
        description: req.body.description
    }

    console.log(newAnimal);
    
    res.send(newAnimal);
})

//Create PUT Route

//     data.query('UPDATE animals SET name = \'Angry Dawg\' WHERE id = 1', (err, results) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log("Updating is working!");
//         // res.json(results.rows[0]);
//     });

//     data.query('SELECT * FROM animals ORDER BY id', (err, results) => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//         console.log("Second query worked!");
//         console.log(results.rows);
//     });

//     data.release;
    
// })

//Create DELETE Route


//Print welcome message when active PORT is detected
app.listen(PORT, () => console.log(`Welcome to a blast from the past! This server is running on http://localhost:${PORT}`));