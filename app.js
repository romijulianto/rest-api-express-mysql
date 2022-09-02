const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/database');
const app = express();
const PORT = process.env.PORT || 2000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create data / insert data
app.post('/api/hospital', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = {...req.body };
    const querySql = 'INSERT INTO bootcamp SET ?';

    connection.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Failed to insert', error: err });
        }
        res.status(201).json({ success: true, message: 'Insert succed' });
    });
});

// create server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));