const express = require('express');
const router = express.Router();
const passport = require('passport');
const config = require('../../server/config/env');
const User = require('../../server/models/users.js');
const jwt = require('jsonwebtoken');


// Resgister
router.post('/signup', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    User.addUser(newUser, (err, user) => { 
        if(err){
            res.json({success: false, msg: 'Error. User registration failed'});
        } else {
            res.json({success: true, msg: 'Success. User registered'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
        
    User.getUserByUsername(username, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'User does not exist'});
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                passport.serializeUser(function(user, done) {
                done(null, user.id);
                });
                passport.deserializeUser(function(id, done) {
                User.findById(id, function(err, user) {
                    done(err, user);
                });
            });

                //jwt token generation sign with RSA SHA256 with expiration time (* important note *)works for version 8
                const token = jwt.sign({data: user}, config.development.secret,{expiresIn: '1h'}, {algorithm: 'RS256'});
   
                // response on the frontend sending back user token + object
                res.json({
                    success: true,
                    token: 'myJWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });
            } else {
                return res.json({
                    success: false, msg: 'Invalid credentials!'
                });
            }
        });
    });
});
// login
router.post('/login', passport.authenticate('local', { 
        successRedirect: '/dashboard',
        failureRedirect: '/login'})
);

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res) => {
        res.json({user: req.user});
    }
);


module.exports = router;