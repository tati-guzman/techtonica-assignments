import express from 'express'

const app = express();
const PORT = 5002;

app.get('/',(req, res) => {
    res.send('Hello World!');
})

//Sanity check to double check where the port is
app.listen(PORT, () => {
    console.log(`App is being run on port ${PORT}`)
})