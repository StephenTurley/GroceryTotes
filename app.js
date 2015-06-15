var express = require('express');
var path = require('path');
var app = express();

var routes = require('./routes');

exports.app = app;

app.use(express.static(path.join(__dirname,'client/dist/')));

app.get('/', routes.index);

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log('grocery_totes is running on port: ' + port);
});