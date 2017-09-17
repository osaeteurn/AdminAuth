const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../../server/config/env');


// Mongoose User Schema
const UserSchema = mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

// Mongoose User Model
const User = module.exports = mongoose.model('User', UserSchema);

//Export function to get user by Id
module.exports.getUserByID = function(id, callback) {
    User.findById(id, callback);
}

//Export function to query user by Username
module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
}

//Export function to query user by Email
module.exports.getUserByEmail = function(email, callback) {
    const query = {email: email};
    User.findOne(query, callback);
}
//Export function to add User with bcrypt hashed from DB
module.exports.addUser = (newUser, callback) => {
    //hashing password with bcrypt
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            //if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}

//Export function to load password hash from DB
module.exports.comparePassword = (candidatePassword, hash, callback) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    })
}