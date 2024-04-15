const express = require('express')
const bodyParser = require('body-parser')

const { PORT } = require('./config/server.config');
const apiRouter = require('./routes');

const app = express()

app.use('/api', apiRouter)

app.get('/ping', (req, res) => {
    return res.json({message: 'Problem Service is alive'});
});

app.listen(PORT, async =>{
    console.log('hello', PORT)
    

})