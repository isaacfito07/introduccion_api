const mysql = require('mysql');

//Set database conecction credentials
const config={
    host:'localhost',
    user:'root',
    password:'Dodge2008hoy',
    database:'api',
};

//create a MySQL pool
const pool = mysql.createPool(config);

// Export the pool
module.exports=pool;