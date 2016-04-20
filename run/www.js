console.log('hello');
var debug = require('debug')('express-example');
var app = require('../routers/app');
var models = require("../JavaScript/models");

app.set('port', process.env.PORT || 3000);

models.DBmediator.sync()
.then(function () {
    var server = app.listen(app.get('port'), function() {
        debug('Express server listening on port ' + server.address().port);
    });
});