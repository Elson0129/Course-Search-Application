var express = require('express');
const router = require('./routes.js');
var app = express();

const port = process.env.PORT || 5000;

var endpoints = require('./routes.js')
app.use('/api', endpoints);

app.use(express.static('frontend_module'));

app.listen(port, () => {
    console.log("App is listening to port " + port)
})
