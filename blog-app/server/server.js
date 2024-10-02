//Import frameworks for app and middleware
import express from 'express';
import cors from 'cors';

// //Import database connection
import db from './db/db-connection.js';

//Standard set-up operations for Express and Node
const app = express();
const PORT = process.env.PORT || 8020;
app.use(cors());
app.use(express.json());

//GET Route to pull all COMPLETED blog posts
//'/blog/'
//Reminder to filter by completion status!

//POST Route to create a new blog post
//'/blog/'

//GET Route to pull data from AI API

//Print PORT location when active PORT is detected (server is running properly)
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
});
