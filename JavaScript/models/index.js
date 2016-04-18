

"use strict";

var fs        = require("fs");
var path      = require("path");
var env       = "test";

//process.env.NODE_ENV ||
var config    = require(path.join(__dirname, '..', 'config', 'DelibDBconf.json'))[env];
var Sequelize = require('sequelize');
var DBmediator = new Sequelize(config.database, config.username, config.password, config);
var db        = {};


// NOTE: .reddir*Sync* is not an A-sync. function.
// Meaning node will proceed only when .readdirSync's interpretation is done.
// May be a good idea if .readdirSync will be kept at its original form.
// Generally, may be a good idea to acknowlegde other contributers of the creation/editing of Sync. functions.

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = DBmediator.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.DBmediator = DBmediator;
db.Sequelize = Sequelize;

module.exports = db;
