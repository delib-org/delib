console.log('hello');
var debug = require('debug')('express-example');
var app = require('../routers/app');
var models = require("../models");

app.set('port', process.env.PORT || 3000);

models.DBmediator.sync()
.then(function () {
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port ' + server.address().port)
        debug('Express server listening on port ' + server.address().port);
    });
});