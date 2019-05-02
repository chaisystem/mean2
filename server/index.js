const express = require('express');
const morgan = require('morgan');
const app = express();

// settings
app.set('port', process.env.PORT || 3000); // puerto asignado por el sistema o puerto 3000

// middlewares
app.use(morgan('dev')); // muestra informacion de la peticion

//routes

//starting the serve

app.listen(app.get('port'),()=>{
    console.log('server on port ',app.get('port'))
})