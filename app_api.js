var express = require('express');
const router = require('./routes.js');
var app = express();

const port = 3000;

var endpoints = require('./routes.js')
app.use('/api', endpoints);

app.use(express.static('frontend_module'));

app.listen(port, () => {
    console.log("App is listening to port " + port)
})
