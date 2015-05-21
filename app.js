var express = require('express'),
    path = require('path'),
    app = express();

app.use(express.static(path.join(__dirname,'client/dist/')));

app.get('/', function(req, res){
    res.render('index.html');
});

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log('grocery_totes is running on port: ' + port);
});