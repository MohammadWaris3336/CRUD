// app.js

const express = require('express');  //expressjs
const bodyParser = require('body-parser'); //middleware

const product = require('./routes/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');  
let dev_db_url = 'mongodb+srv://mongodb:mongodb@cluster0.mkua9he.mongodb.net/test';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 8000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});