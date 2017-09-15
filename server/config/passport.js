const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('../../server/models/users');
const config = require('../../server/config/env');

module.exports = function(passport){
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = 'config.development.secret';
    // opts.audience = 'login.mywebsite.com';
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // using getUserByID from the model
        User.getUserById(jwt_payload._id,  (err, user) => {
            // if theres an error then show the error
            if (err) { 
                return done(err, false); 
            }
            // if it does NOT = user then show msg
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            // if the password are not correct then show msg
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect credentials.' });
            } else {
            return done(null, user);
            };
        });
    }));
};
