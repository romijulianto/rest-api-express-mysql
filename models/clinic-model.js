const connection = require('../config/database');
const { responseData, responseMessage } = require('../utils/response-handler');

// Create insert function
exports.insertUser = (response, querySql, data) => {

    connection.query(querySql, data, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ message: 'Failed to insert', error: err });
        }
        responseMessage.status(201).json({ success: true, message: 'Insert succed' });
    });

};

// Create get function
exports.getUser = (response, querySql) => {

    connection.query(querySql, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ message: 'Having Problem', error: err });
        }
        responseData(response, 200, rows)
    });
};

// update data bootcamp
exports.updateuser = (response, querySearch, queryUpdate, id, data) => {
    // query to searching data
    connection.query(querySearch, id, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ message: 'Having problem', error: err });
        }

        // if id found on database
        if (rows.length) {
            connection.query(queryUpdate, [data, id], (err, rows, field) => {
                // error handling
                if (err) {
                    return response.status(500).json({ message: 'Having problem', error: err });
                }
                responseMessage(response, 200, 'Update data succed!');
            });
        } else {
            return response.status(404).json({ message: 'Data not found', success: false });
        }
    });
};

// delete bootcamp
exports.deleteUser = (response, querySearch, queryDelete, id) => {

    // running query to search data
    connection.query(querySearch, id, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ message: 'Having problem', error: err });
        }

        // if id found on database
        if (rows.length) {
            // running query delete
            connection.query(queryDelete, req.params.id, (err, rows, field) => {
                // error handling
                if (err) {
                    return response.status(500).json({ message: 'Having problem', error: err });
                }

                // jika delete berhasil
                responseMessage(response, 200, 'Delete succed');
            });
        } else {
            return response.status(404).json({ message: 'Data not found', success: false });
        }
    });
};