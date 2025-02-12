const express = require('express');



const app = express();

app.get('/', (req, res) => { 
       // This is a route handler
         res.send('Hello World');
});


module.exports = app;