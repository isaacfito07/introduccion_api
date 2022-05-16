const sql = require('mssql');

//Set database conecction credentials
const config = {
    server: 'localhost',
    user: 'isaac',
    password: 'qwerty123',
    database: 'api',
    options: {
        trustServerCertificate: true
    }
};

//create a MSSQL pool
const pool = {
    query: function(query, callback) {
        sql.connect(config).then((pool) => {
            return pool.query(query);
        }).then(result => {
            callback(null, result);
        }).catch(err => {
            callback(err, null);
        });
    }
}

// Export the pool
module.exports=pool;