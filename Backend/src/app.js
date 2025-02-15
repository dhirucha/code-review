const express = require('express');
const aiRoutes = require('./routes/ai.routes');


const app = express();

app.use(express.json());

app.get('/', (req, res) => { 
       // This is a route handler
         res.send('Hello World');
});

app.use('/ai', aiRoutes);


module.exports = app;