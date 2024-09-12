//Import Pool class from pg package to use for connection pooling
import pkg from 'pg';

const { Pool } = pkg;

import dotenv from 'dotenv';
dotenv.config();

const db = new Pool({
    connectionString: process.env.DATABASE_URI
  });

//Create db instance of Pool class with secret configs - URI worked instead, DELETE LATER once DB connection secure
// const db = new Pool({
//     user: process.env.DB_USER,          
//     host: process.env.DB_HOST,          
//     database: process.env.DB_NAME,      
//     password: process.env.DB_PASSWORD,  
//     port: process.env.DB_PORT,    
// });

//Export db object for server to import and use  
export default db;
// module.exports = db; <-- Old syntax, doesn't work with updated ES Module

//TO DELETE LATER - Older syntax from template, throws err bc not ES Module:

// const { Pool } = require('pg');
// const db = new Pool({
//     connectionString: process.env.DATABASE_URI
//   });