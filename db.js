const mysql = require('mysql2');
const dotenv = require('dotenv');

// dotenv setup
dotenv.config();

// mysql setup
const conn = mysql.createPool({
    connectionLimit: 10,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    database: process.env.DATABASE
  });
  
  conn.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected to Database!");
  });

module.exports = conn;