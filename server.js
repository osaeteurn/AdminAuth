const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');


// Mongoose global promise
mongoose.Promise = global.Promise;

// Database Environment Config
const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
	envConfig = require('./server/config/env')[env];

// Mongoose Connection    
mongoose.connect(envConfig.db, { 
    useMongoClient: true,}).then(
        () => { 
            console.log('Connected to database ');
        },
        err => {
            console.log('Datatbase Error: '  + err); 
        }
);

// Init Express
const app = express();

//Users file for interacting with database
const users = require('./server/routes/users');

// output to Angular DIST folder
app.use(express.static(path.join(__dirname, 'dist')));

//CORs Middleware
app.use(cors());

// Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./server/config/passport');

// Set port number
const port = process.env.PORT || '3000';
app.set('port', port);



app.use('/users', users)

// Main Route
app.use('/', (req, res) =>{
     res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Starting Server
app.listen(envConfig.port, () => {
    console.log('Server started on port ' + envConfig.port);
});