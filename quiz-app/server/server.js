//Express is the application framework needed to run the server
import express from 'express';
//Cors is middleware required to make sure front end and back end can communicate
import cors from 'cors';
//Import database connection
import db from './db/db-connection.js';


//Run applicable configs to set up file properly
const app = express();
app.use(cors());
app.use(express.json());

//Set up the PORT for the server
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
app.get('/players', async (req, res) => {
    try {
        const allPlayerInfo = await db.query('SELECT * FROM players');
        res.json(allPlayerInfo.rows);
    } catch (error) {
        res.status(500).json({ error: "Could not get all player info", details: error });
    }
});

//PUT Request to update a user score if it's better
//'/players/:username'
app.get('/players/:id', async (req, res) => {
    console.log("We will update this player's score soon.");
    console.log(req.params);

    //Pull ID from params
    const playerID = req.params.id;
    console.log(req.body);
    //Pull new score from request
    const newScore = req.body.score;

    const query = 'UPDATE players SET "score" = $1 WHERE id = $2 RETURNING *'

    try {
        const updateScore = await db.query(query, [newScore, playerID])
        console.log({ message: "Update was successful!", details: updateScore.rows[0] });
        res.json(updateScore.rows[0]);
    } catch (error) {
        res.status(500).json({ error: "Could not update player score", details: error });
    }
});

//POST Request to update user list with new user and their score! (only when they finish)
//'/players/new_user'
app.post('players/newUser', async (req, res) => {
    console.log("Creating new player!");

    try {
        //Print request into console
        console.log(req.body);

        //Deconstruct the request into individual elements
        const { username, score } = req.body;

        //Create query string
        const queryInsert = 'INSERT INTO players (username, score) VALUES ($1, $2)';

        const newPlayer = await db.query(queryInsert, [username, score]);

        //Error handling if it gets stuck at this point
        if (!newPlayer.rows && newPlayer.rows.length < 1) {
            res.status(500).json({ error: "Error creating new player. Failed to retrieve any data."});
        }

        const details = newPlayer.rows[0];

        res.json({ message: "Player added successfully with score.", details: details });
        return;
    } catch (error) {
        res.status(500).json({ error: "Error creating new player record.", details: error });
    }
});

//DELETE Request to delete a user (not used but needs to be in there)
//'/players/:id'
app.delete('players/:id', async (req, res) => {
    console.log("We will be deleting this player soon");
    console.log(req.params);

    //Pull id from request parameters
    const id = req.params.id;

    try {
        const deletionStatement = 'DELETE FROM players WHERE id = $1';
        await db.query(deletionStatement, [id]);
        console.log("Player has been deleted!");
        res.json({ message: "successfully deleted player!" });
        res.status(200).end();
    } catch (error) {
        res.status(500).json({ error: "Could not delete player", details: error });
    }
});

//When the server is activated, its PORT will be printed to the console as confirmation that it started
app.listen(PORT, () => {
    console.log(`App is being run on port ${PORT}`)
})