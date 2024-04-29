const mysql = require('mysql2');

// mysql setup
const conn = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql-2798d337-student-ded3.d.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_We6gfnhE5bvYwk_cHg2',
    port: 17428,
    database: 'UTS-EAI'
  });
  
  conn.getConnection(function(err) {
    if (err) throw err;
    console.log("Connected to Database!");
  });

module.exports = conn;