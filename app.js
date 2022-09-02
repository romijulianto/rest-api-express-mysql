const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./config/database');
const app = express();
const PORT = process.env.PORT || 2000;

// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create data / insert data
app.post('/api/clinic', (req, res) => {
    // buat variabel penampung data dan query sql
    const data = {...req.body };
    const querySql = 'INSERT INTO user SET ?';

    connection.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Failed to insert', error: err });
        }
        res.status(201).json({ success: true, message: 'Insert succed' });
    });
});

// read data / get data
app.get('/api/clinic', (req, res) => {
    const querySql = 'SELECT * FROM user';

    koneksi.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Having problem', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
});

// create server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));