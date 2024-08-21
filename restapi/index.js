import express from 'express';
import cors from 'cors'; //I don't know what this does!
// import webkinz from './webkinz.js';

const app = express();
const PORT = 5000;

//Configuring cors middleware - WHAT DOES THAT MEAN
app.use(cors());


//Need to practice the four CRUD operations: POST, GET, PUT, DELETE

//Create route for GET
app.get('/', (req, res) => {
    console.log("This worked!");
})


app.listen(PORT, () => console.log(`Welcome to a blast from the past! This server is running on http://localhost:${PORT}`));