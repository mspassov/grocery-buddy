const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbURI = require('./config/keys');

const app = express();

//body-parser middleware
app.use(bodyParser.json());

const db = dbURI.mongoURI;

//conenct to db
mongoose.connect(db)
    .then(() => console.log('Database is connected!'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started!'));






