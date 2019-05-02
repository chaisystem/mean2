const express = require('express');
const app = express();

// settings
app.set('port', process.env.PORT || 3000); // puerto asignado por el sistema o puerto 3000

// middlewares

//routes

//starting the serve

app.listen(app.get('port'),()=>{
    console.log('server on port ',app.get('port'))
})