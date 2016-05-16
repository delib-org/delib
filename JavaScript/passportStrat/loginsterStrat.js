"use strict";

var JwtStrategy =  require('passport-jwt').Strategy;
//var ExtractJwt  = require('passport-jwt').ExtractJwt;
// var BearerStrategy = require('passport-http-bearer').Strategy;
// var FacebookStrategy = require('passport-facebook').Strategy;

var passport = require('passport');
var models  = require('../models/index');
var config = require('../config/DelibConf.json');
// JWT Auth:

var opts= {};
// opts JSON defines the behavior and nessacery fileds for the JwtStrategy object.
// method of extraction may be varied using a different
// ExtractJwt.<<extraction_method_function>>

// check out https://www.npmjs.com/package/bcrypt
// and https://github.com/ncb000gt/node.bcrypt.js
// for further info.

// !!REQUIRED opts json fields!!
// The following assignment to opts JSON defines the token extraction method
// of the pre-defined JSON Web Token. In oue case from a URL parameter.

opts.jwtFromRequest = require('passport-jwt').ExtractJwt.fromUrlQueryParameter('token');
opts.secretOrKey = config.jwtSecretString;


console.log("jwtFromRequest"+opts.jwtFromRequest);
// Optional opts json fields:
// opts.issuer = models.user.userUuid;
// opts.audience = "yoursite.net";

// Following script is the actual implementation and actions to be taken, using
// JWT as our passport strategy. Note that JwtStrategy object is using opts JSON.
// passport.use(
//     new FacebookStrategy(
//         options,
//         function(accessToken, refreshToken, profile, done) {
//             User.findOrCreate(
//                 { facebookId: profile.id },
//                 function (err, result) {
//                     if(result) {
//                         result.access_token = accessToken;
//                         result.save(function(err, doc) {
//                             done(err, doc);
//                         });
//                     } else {
//                         done(err, result);
//                     }
//                 }
//             );
//         }
//     )
// );

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    console.dir("this is a jwt_payload round here:"+jwt_payload);
        models.user.find({where: {Uuid: jwt_payload.iss}},function(err, user){
            console.log(jwt_payload);
            if (err) {
                console.log(jwt_payload);
                return done(err, false);
            }
            if(user) {
                return done(null, user);
            } else {
                console.log(jwt_payload);
                done(null, false);
            }
        });
    }
));

// Use the exported passport object in order to apply authentication on a chosen route/router

module.exports = passport;