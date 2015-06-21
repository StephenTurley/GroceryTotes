var db = require('../../db');

exports.getList = function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(db.getList());	
};