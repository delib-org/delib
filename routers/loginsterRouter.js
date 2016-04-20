var models  = require('../models');
var loginsterHandler = require('../handlers/loginHandler');
var express = require('express');
var loginsterRouter  = express.Router();
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

loginsterRouter.post('/loginster', loginsterHandler.postReg(req, res, jwt, bcrypt, models));

loginsterRouter.get('/:user_id/destroy', loginsterHandler.getReg(req, res, models));

module.exports = loginsterRouter;