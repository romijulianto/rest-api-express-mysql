const {
    createData,
    readData,
    updateData,
    deleteData
} = require('../controllers/clinic-controller');
const express = require('express');
const router = express.Router();

router.route('/')
    .post(createData)
    .get(readData);
router.route('/:id_user')
    .put(updateData)
    .delete(deleteData);

module.exports = router;