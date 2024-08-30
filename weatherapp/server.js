//Express is the application framework needed to run the server
import express from 'express';
//Cors is middleware required to make sure front end and back end can communicate
import cors from 'cors';
//Body Parser is a library used to extract info from HTTP requests
import bodyParser from 'body-parser';
//Node fetch will help to make requests
import fetch from 'node-fetch';
//Dotenv will allow our .env file to connect without sharing our secrets
import dotenv from 'dotenv';

//Run applicable configs to set up file properly
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

dotenv.config();

//Set up the PORT for the server - 5002 is hard-coded here.
const PORT = 5002;

//GET request to fetch data from OpenWeather API
app.get('/api', async (req, res) => {
    //API Key is kept secret by requesting info from .env file
    const apiKey = process.env.API_KEY;
    //City name will come in as a param from the request
    console.log(req.query);
    const cityName = req.query.city;
    //The URL will dynamically change based on the city requested. API key inserted from .env file.
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    //Server will fetch the information from the URL
    fetch(url)
        //Response is parsed into json format
        .then((res) => res.json())
        //JSON data is then sent to front end
        .then((data) => res.send({data}))
        //If there is an error, the details will be logged to the console
        .catch((err) => console.error({Details: err})); //Future implementation should also send a message to the user
})

//When the server is activated, its PORT will be printed to the console as confirmation that it started
app.listen(PORT, () => {
    console.log(`App is being run on port ${PORT}`)
})