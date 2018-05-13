const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');

const simple = require('./simpleController');
const fitness = require('./fitness/controller');

var app = express()

const servername = "localhost";
const port = 8080;

app
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "*");
        next();      
    })
    .use('/fitness', fitness)
    .listen(port);

console.log("running on http://" + servername + ":" + port)