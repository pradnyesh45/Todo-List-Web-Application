const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error in Connecting to db"));

db.once('open', function(){
    console.log('Successfully connected to the database');
});