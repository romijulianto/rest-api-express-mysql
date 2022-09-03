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