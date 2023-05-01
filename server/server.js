const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const config = require('./config'); //imporitng MONGODB_URI, PORT

const app = express();

app.use(bodyParser.json());
app.use(cors());

//routes

//mongoDB connection
mongoose.set('strictQuery', false);

mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected");
}).catch((err) => console.log('DB connction faliure', err));

//server
app.listen(config.PORT,() => {
    console.log(`Server is running on port ${config.PORT}`);
});