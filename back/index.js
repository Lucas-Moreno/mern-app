require('./db');
const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
var cors = require('cors');
const port = 5000;




var app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req, res) {
    res.send('Hello world');
  });

app.listen(port, () => console.log(`Back app listening on port ${port}!`));

