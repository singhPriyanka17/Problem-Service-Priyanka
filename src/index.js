const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');
const errorHandler = require('./utils/errorHandler');

const app = express()

app.use('/api', apiRouter)



app.use(errorHandler);

app.listen(PORT, async =>{
    console.log(`Server started at PORT : ${PORT}`)    
});