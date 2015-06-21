var list = [];

exports.getList = function(){
	return list;
};

exports.addItem = function(item){
	list.push(item);
};

exports.dropCollection = function(){
	list = [];
};

