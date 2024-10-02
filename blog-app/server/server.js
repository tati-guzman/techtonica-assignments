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
app.get('/blog', async (req, res) => {
    console.log("Pulling all completed posts!");

    try {
        //Only select posts marked complete to avoid showing drafts
        const queryStatement = 'SELECT * FROM posts WHERE complete = true';

        const completedPosts = await db.query(queryStatement);
        res.json(completedPosts.rows);
    } catch (error) {
        res.status(500).json({ error: 'Could not pull posts', details: error });
    }
});

//POST Route to create a new blog post
//'/blog/'
app.post('/blog', async (req, res) => {
    console.log("Creating your new post now!");
    
    try {
        //Deconstruct request body
        const {title, image, content, complete } = req.body;

        //Create SQL query string
        const query = 'INSERT INTO posts (title, image, content, complete) VALUES ($1, $2, $3, $4) RETURNING post_id'
        
        //Send query to create new post
        const response = await db.query(query, [title, image, content, complete]);

        //Error handling if it gets stuck creating a new post
        if (!response.rows && response.rows.length < 1) {
            res.status(500).json({error: "Error creating new post."})
        }

        res.status(200).json({ message: "Successfully saved post", details: response.rows[0]});
    } catch (error) {
        res.status(500).json({ error: "Could not create post", details: error });
    }
});

//GET Route to pull data from AI API

//Print PORT location when active PORT is detected (server is running properly)
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})
