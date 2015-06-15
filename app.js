var express = require('express');
var path = require('path');

var app = exports.app = express();


var index = require('./routes/index');
var api = require('./routes/api/api');

app.use(express.static(path.join(__dirname,'client/dist/')));

app.get('/', index.get);
app.get('/api/list', api.list.getList);

function start(){
    var port = process.env.PORT || 8080;
    
    app.listen(port, function(){
        console.log('grocery_totes is running on port: ' + port);
    });
};

exports.start = start;


