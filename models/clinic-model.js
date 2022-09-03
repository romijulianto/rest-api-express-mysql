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

// update data user
exports.updateUser = (response, querySearch, queryUpdate, id_user, data) => {
    // query to searching data
    connection.query(querySearch, id_user, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ message: 'Having problem', error: err });
        }

        // if id_user found on database
        if (rows.length) {
            connection.query(queryUpdate, [data, id_user], (err, rows, field) => {
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

// delete user
exports.deleteUser = (response, querySearch, queryDelete, id_user) => {

    // running query to search data
    connection.query(querySearch, id_user, (err, rows, field) => {
        // error handling
        if (err) {
            return response.status(500).json({ message: 'Having problem', error: err });
        }

        // if id_user found on database
        if (rows.length) {
            // running query delete
            connection.query(queryDelete, id_user, (err, rows, field) => {
                // error handling
                if (err) {
                    return response.status(500).json({ message: 'Having problem', error: err });
                }

                responseMessage(response, 200, 'Delete succed');
            });
        } else {
            return response.status(404).json({ message: 'Data not found', success: false });
        }
    });
};