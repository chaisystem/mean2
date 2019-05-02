const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

// router.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.json({
//         status: 'API Works'
//     });
// });

router.get('/', employee.getEmployee)

module.exports = router;