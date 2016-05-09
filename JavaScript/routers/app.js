var express = require('express');
var path = require('path');
var fs        = require('fs');
var logger = require('morgan');
var ejs = require('ejs').renderFile;
var routersJson = {};
var bodyParser = require('body-parser');

// HAI: might be used ?
//var cookieParser = require('cookie-parser');
//app.use(cookieParser());

var app = express();
app.use(logger('dev'));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'views')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Welcome to routerMounter!
// 
// FACTS:
// 1. routerMounter is a simple fs.reddir SYNCED (!!) function that runs over the current folder's files
// and mounts the router inside them, using app.use().
// NOTE that every file represents ONE and ONE only router.
//
// 2. Inside every router's file there is a module.exports call which exports the following JSON:
// {
//     actualRouter: loginsterRouter,   <--- is the actual router's content.
//     routerPath: '/loginster',        <--- is the router's URL Path to be used in app.use.
//     Name: "loginsterRouter"          <--- is the router name contained in a string.
// }
//
// 3. inside fs.readdirSync: exportedRouterJson is the exported JSON that contains the router's
// Name, Path and the actual content of the router.
//
// Right then, app.use() is being called and uses the
// exportedRouterJson properties: .routerPath and .actualRouter
//
// We have mounted all routers! YAY!

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "app.js");
    })
    .forEach(function routerMounter (file) {
        var exportedRouterJson = require(path.join(__dirname, file));
        app.use(exportedRouterJson.routerPath, exportedRouterJson.actualRouter);
        routersJson[exportedRouterJson.Name] = exportedRouterJson;
    });
//
// 4. routersJson is a JSON that contains all exportedRouterJson-s
// and holds each one by using exportedRouterJson.Name as a key.
// SO if you ever want to address a specific router you can do that using:
//
//                  routersJson.<<NAME_OF_ROUTER>>.actualRouter

app.get('/', function (req, res) {
    res.redirect('/loginster/register');
});


// Catch 404 and forward to error handler

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// Error handler

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
    console.log(console.dir(err.stack));
});


module.exports = app;