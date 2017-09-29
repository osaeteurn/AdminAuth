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
        email: req.body.email,
        password: req.body.password
    });
    User.addUser(newUser, (err, user) => {
        if(err){
            res.json({success: false, message: 'User registration failed'});
        } else {
            res.json({success: true, message: 'Success. User registered'});
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
        
    User.getUserByEmail(email, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.sendStatus(404);
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
                    token: token,
                    id: user._id,
                });
            } else {
                return res.sendStatus(403);
            }
        });
    });
});
// login
router.post('/login', passport.authenticate('local', { 
        successRedirect: '/dist/dashboard',
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