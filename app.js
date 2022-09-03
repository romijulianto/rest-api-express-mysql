const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/database');
const app = express();
const PORT = process.env.PORT || 2000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create data / insert data
app.post('/api/clinic/user', (req, res) => {});

// read data / get data
app.get('/api/clinic/user', (req, res) => {
    const querySql = 'SELECT * FROM user';
});

// update data
app.put('/api/clinic/:id', (req, res) => {
    // create variable to store data and query sql
    const data = {...req.body };
    const querySearch = 'SELECT * FROM user WHERE id = ?';
    const queryUpdate = 'UPDATE user SET ? WHERE id = ?';
});

// delete data
app.delete('/api/clinic/:id', (req, res) => {
    // create sql query to search and delete
    const querySearch = 'SELECT * FROM user WHERE id = ?';
    const queryDelete = 'DELETE FROM user WHERE id = ?';

});

// create server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));