//Express is the application framework needed to run the server
import express from 'express';
//Cors is middleware required to make sure front end and back end can communicate
import cors from 'cors';
//Body Parser is a library used to extract info from HTTP requests
import bodyParser from 'body-parser';
//Node fetch will help to make requests
import fetch from 'node-fetch';
//Import database connection
import db from './db/db-connection.js';


//Run applicable configs to set up file properly
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Set up the PORT for the server - 5003 is hard-coded here.
const PORT = process.env.PORT || 5003;

//GET request to fetch data from trivia - 10 questions, animal category, level easy, true/false
app.get('/quiz', async (req, res) => {
    const url = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=boolean'
    
    console.log("Made it to the server")

    //Server will fetch the information from the URL
    fetch(url)
        //Response is parsed into json format
        .then((res) => res.json())
        //JSON data is then sent to front end
        .then((data) => res.send(data))
        //If there is an error, the details will be logged to the console and an oops message will be sent to user
        .catch((err) => {
            console.error({Details: err});
            res.send("Uh oh! Something went wrong getting new quiz questions!")
        });
})

//GET Request to fetch all users and scores for drop down and for leader board 
//'/players'


//PUT Request to update a user score if it's better
//'/players/:username'

//POST Request to update user list with new user and their score! (only when they finish)
//'/players/new_user'

//DELETE Request to delete a user (not used but needs to be in there)
//'/players/:username'

//When the server is activated, its PORT will be printed to the console as confirmation that it started
app.listen(PORT, () => {
    console.log(`App is being run on port ${PORT}`)
})