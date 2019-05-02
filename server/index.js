const express = require('express');
const morgan = require('morgan');
const app = express();

const { mongoose } = require('./database');

// settings
app.set('port', process.env.PORT || 3000); // puerto asignado por el sistema o puerto 3000

// middlewares
app.use(morgan('dev')); // muestra informacion de la peticion
app.use(express.json()); // es para que el servidor pueda interpretar json

//routes
app.use(require('./routes/employee.routes'));

//starting the serve

app.listen(app.get('port'),()=>{
    console.log('server on port ',app.get('port'))
})