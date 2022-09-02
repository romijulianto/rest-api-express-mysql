const mysql = require('mysql');
// create connection configuration
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clinic_rj',
    multipleStatements: true
});

// connection database
connection.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = connection;