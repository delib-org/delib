
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/groups', function (req, res) {
    res.send('Groups List');
});
app.get('/users', function (req, res) {
    res.send('Users List');
});
app.get('/options', function (req, res) {
    res.send('Options List');
});
app.get('/questions', function (req, res) {
    res.send('Hello World!');
});
app.get('/issues', function (req, res) {
    res.send('Issues List');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});