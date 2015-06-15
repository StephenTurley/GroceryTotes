var list = [
	{name : 'bread'},
	{name : 'milk'},
	{name : 'beer'}
];

exports.getList = function(req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send(list);
};