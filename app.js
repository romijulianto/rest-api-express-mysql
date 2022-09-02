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

    connection.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Having problem', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
});

// update data
app.put('/api/clinic/:id', (req, res) => {
    // create variable to store data and query sql
    const data = {...req.body };
    const querySearch = 'SELECT * FROM user WHERE id = ?';
    const queryUpdate = 'UPDATE user SET ? WHERE id = ?';

    // query to searching data
    connection.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Having problem', error: err });
        }

        // if id found on database
        if (rows.length) {
            connection.query(queryUpdate, [data, req.params.id], (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Having problem', error: err });
                }

                res.status(200).json({ success: true, message: 'Updated data succed' });
            });
        } else {
            return res.status(404).json({ message: 'Data not found', success: false });
        }
    });
});

// delete data
app.delete('/api/clinic/:id', (req, res) => {
    // create sql query to search and delete
    const querySearch = 'SELECT * FROM user WHERE id = ?';
    const queryDelete = 'DELETE FROM user WHERE id = ?';

    // running query to search data
    connection.query(querySearch, req.params.id, (err, rows, field) => {
        // error handling
        if (err) {
            return res.status(500).json({ message: 'Having problem', error: err });
        }

        // if id found on database
        if (rows.length) {
            // running query delete
            connection.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return res.status(500).json({ message: 'Having problem', error: err });
                }

                res.status(200).json({ success: true, message: 'Delete succed' });
            });
        } else {
            return res.status(404).json({ message: 'Data not found', success: false });
        }
    });
});

// create server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));