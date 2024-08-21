import express from 'express';
import cors from 'cors'; //I don't know what this does!
import webkinz from './webkinz.js';

const app = express();
const PORT = 5000;

//Configuring cors middleware - WHAT DOES THAT MEAN
app.use(cors());


//Need to practice the four CRUD operations: POST, GET, PUT, DELETE

//Create Welcome Message for Root Directory
app.get('/', (req, res) => {
    res.json("Welcome to my Webkinz Page! Navigate to '/webkinz' to see the list of Webkinz!")
    console.log("Made it to the main page");
})

//Create route for GET
app.get('/webkinz', (req, res) => {
    res.json(webkinz)
    console.log("In the Webkinz page!");
})


app.listen(PORT, () => console.log(`Welcome to a blast from the past! This server is running on http://localhost:${PORT}`));