const employeeCtrl = {};

employeeCtrl.getEmployee = (req, res) => {
    // res.send('Hello World');
    res.json({
        status: 'API Works, aqui iran los employees'
    });
}

module.exports = employeeCtrl;