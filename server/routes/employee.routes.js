const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee.controller');

// router.get('/', (req, res) => {
//     // res.send('Hello World');
//     res.json({
//         status: 'API Works'
//     });
// });

router.get('/', employee.getEmployees);
router.post('/', employee.createEmployee);
router.get('/:id', employee.getEmployee);
router.put('/:id', employee.editEmployee);
router.delete('/:id', employee.deleteEmployee);

module.exports = router;