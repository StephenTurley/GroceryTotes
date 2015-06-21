var db = require('../../db');

exports.addItem = function(req, res){
	res.setHeader('Content-Type', 'application/json');
	
	db.addItem(req.body, function(item){
		res.send(item);
	});
};