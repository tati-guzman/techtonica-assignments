import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

dotenv.config();

const PORT = 5002;


app.get('/api', async (req, res) => {
    const apiKey = process.env.API_KEY;
    const cityName = 'seattle'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => res.send({data}))
        .catch((err) => console.error({Details: err}));
})

//Sanity check to double check where the port is
app.listen(PORT, () => {
    console.log(`App is being run on port ${PORT}`)
})