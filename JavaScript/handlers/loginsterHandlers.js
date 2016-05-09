"use strict";

var jwt = require('jsonwebtoken');
var models  = require('../models/index');
var moment = require('moment');
var config = require('../config/DelibConf.json');


module.exports =
{
    registerUser: function (req, res, err) {

        console.dir(req.body);

        //creating a user if request JSON implemented
        if (req.body.name == '' || req.body.passwd== '') {
            res.json({success: false, msg: 'Please pass name and password.'});
            return err;
        }

            // if implemented find user
            models.user.findOrCreate({
                    where: {nickName: req.body.name},
                    defaults: {
                        // if not found create with following attributes
                        hash: req.body.passwd
                    }
                })
                .spread(function (result, created) {
                    //console.dir('result:'+result+'created:'+created);
                    if (created) {

                        // creating the actual token
                        var expires = moment().add(1, 'hours').valueOf();
                        var token = jwt.sign({
                            iss: result.Uuid,
                            exp: expires
                        }, config.jwtSecretString);


                        // if succeeded redirect with user uuid and token to params
                        res.redirect('/dashboard/'+result.Uuid+'/'+token);
                    }
                    else {
                        // redirect to registration
                        res.redirect('/loginster/register');
                    }
                });
    },

    loadRegistrationPage: function (req, res) {
        // var data = {
        //     reg: {
        //         message: "welcome to delib REGISTER!",
        //         name: '',
        //         passwd: ''
        //     }
        // };

        res.sendFile('../../views/index.html', {root: __dirname });
    },

    loadLoginPage: function (req, res) {
        var data = {
            login: {
                message: "welcome to delib LOGIN!",
                name: '',
                passwd: ''
            }
        };

        res.send(data);
    },

    authanticateUser: function (req, res, err) {

        var logRes = models.user.validatePassword(req.body.login.passwd, req.body.login.name);
        
        if(logRes.error) {
            res.alert("user not found.");
            res.redirect('/login');
        }
        
        if(!logRes) {
            res.alert("password is incorrect.");
            res.redirect('/login');
        }
        
        // creating the actual token
        var expires = moment().add('hours', 1).valueOf();
        var token = jwt.sign({
            iss: models.user.Uuid,
            exp: expires
        }, config.jwtSecretString);

        // add token to params
        req.params.token = token;

        res.redirect('/dashboard/User=:userUid/token=:token');

        res.json({
            token : token,
            expires: expires,
            user: user.toJSON()
        });
        res.alert("you have created a session-token and a user");
        
    }
};
