const Employee = require('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);    
}

employeeCtrl.getEmployee = (req, res) => {

}

employeeCtrl.createEmployee = (req, res) => {

}

employeeCtrl.editEmployee = (req, res) => {

}

employeeCtrl.deleteEmployee = (req, res) => {

}

module.exports = employeeCtrl;