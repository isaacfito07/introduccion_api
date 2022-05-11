const mysql = require('mysql');

//Set database conecction credentials
const config={
    host:'localhost',
    user:'isaac',
    password:'qwerty',
    database:'api',
};

//create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports=pool;