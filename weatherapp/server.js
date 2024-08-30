import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = 5002;

app.get('/api',(req, res) => {
    res.send('Hello World! This is working!');
})

//Sanity check to double check where the port is
app.listen(PORT, () => {
    console.log(`App is being run on port ${PORT}`)
})