var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
module.exports = app;


var index = require('./routes/index');
var api = require('./routes/api/api');

app.use(express.static(path.join(__dirname,'client/dist/')));
app.use(bodyParser.json());

app.get('/', index.get);
app.get('/api/list', api.list.getList);
app.post('/api/item', api.item.addItem);


function start(){
    var port = process.env.PORT || 8080;
    
    app.listen(port, function(){
        console.log('grocery_totes is running on port: ' + port);
    });
};

app.start = start;


