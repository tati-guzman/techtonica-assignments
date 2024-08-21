import express from 'express';
import cors from 'cors'; //I don't know what this does!
// import webkinz from './webkinz.js';

const app = express();
const PORT = 5000;

//Configuring cors middleware - WHAT DOES THAT MEAN
app.use(cors());

//Create route for GET
app.get('/', (req, res) => {
    console.log("This worked!");
})


app.listen(PORT, () => console.log(`Woohoo! This is working and is running on http://localhost:${PORT}`));