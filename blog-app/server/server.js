//Import frameworks for app and middleware
import express from 'express';
import cors from 'cors';
import multer from 'multer';

// //Import database connection
import db from './db/db-connection.js';

//Standard set-up operations for Express and Node
const app = express();
const PORT = process.env.PORT || 8020;
app.use(cors());
app.use(express.json());

//Set up operations for multer storage
const storage = multer.memoryStorage();
const upload = multer({ 
    storage,
    fileFilter: (req, file, cb) => {
        //Check the type of image uploaded to only allow for jpegs
        if (file.mimetype === 'image/jpeg') {
            cb(null, true);
        } else {
            cb(new Error('File is not a JPEG image.'), false);
        }
    }
});

//GET Route to pull all COMPLETED blog posts
//'/blog/'
app.get('/blog', async (req, res) => {
    console.log("Pulling all completed posts!");

    try {
        //Only select posts marked complete to avoid showing drafts
        const queryStatement = 'SELECT * FROM posts WHERE complete = true ORDER BY post_id DESC';

        const completedPosts = await db.query(queryStatement);
        if (completedPosts.rows.length > 0) {
            const postList = completedPosts.rows;
            const adjustedList = postList.map((post) => {
                if (post.image) {
                    post.image = post.image.toString('base64');
                }
                return post;
            });
            res.json(adjustedList);
        } else {
            res.status(404).json({ message: 'No completed posts found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Could not pull posts', details: error });
    }
});

//POST Route to create a new blog post
//'/blog/'
app.post('/blog', upload.single('image'), async (req, res) => {
    console.log("Creating your new post now!");

    //Deconstruct request body
    const { title, content, complete } = req.body;
    const image = req.file ? req.file.buffer : null;
    
    try {
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

//Print PORT location when active PORT is detected (server is running properly)
app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}`);
})
