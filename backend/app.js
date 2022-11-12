const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();


/*Database cinfigurations*/
const config = require('config');
const dbConfig = config.get('FullStackTask.dbConfig.db');

/*Middleware*/
app.use(bodyParser.json());
app.use(cors());

/*Importing routes*/
const routes = require('./config/routes');

app.use('/books', routes);

/*Routes*/
app.get('/', (request, response) => {
    response.send("Home page");
});

/*Connect to database MongoBD*/
mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB")
}).catch(error => {
    console.log("Cannot connect to MongoDB"+error)
});

/*Server that application is listening*/
app.listen(5000);

