const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dbURI = require('./config/keys');
const items = require('./routes/api/items')
const path = require('path')

const app = express();

//body-parser middleware
app.use(bodyParser.json());

const db = dbURI.mongoURI;

//conenct to db
mongoose.connect(db)
    .then(() => console.log('Database is connected!'))
    .catch(err => console.log(err));

//Serve static files, if we are in production
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));

    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
} 

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server started!'));

//Define where your routes are placed
app.use('/api/items', items); //basically go to this file, if this endpoint is hit






