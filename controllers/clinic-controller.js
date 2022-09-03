const {
    insertUser,
    getUser,
    updateUser,
    deleteUser
} = require('../models/clinic-model');

// create user clinic
exports.createData = (req, res, next) => {
    // create variable to store data
    const data = {...req.body };
    const querySql = 'INSERT INTO user SET ?';

    insertUser(res, querySql, data);
};

// get user clinic
exports.readData = (req, res) => {
    const querySql = 'SELECT * FROM bootcamp';

    getUser(res, querySql);
};

// update user clinic
exports.updateData = (req, res) => {
    // create variable to store data dan querysql
    const data = {...req.body };
    const querySearch = 'SELECT * FROM bootcamp WHERE id = ?';
    const queryUpdate = 'UPDATE bootcamp SET ? WHERE id = ?';

    // insert into method model
    updateUser(res, querySearch, queryUpdate, req.params.id, data);
};

// delete user clinic
exports.deleteData = (req, res) => {
    // create variable to store data dan querysql
    const querySearch = 'SELECT * FROM bootcamp WHERE id = ?';
    const queryDelete = 'DELETE FROM bootcamp WHERE id = ?';

    // insert into method model
    deleteUser(res, querySearch, queryDelete, req.params.id);
};