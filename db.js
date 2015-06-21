var list = [];

exports.getList = function(){
	return list;
};

exports.addItem = function(item, callback){

	var callbackFunc = callback || function(){};
	
	list.push(item);

	callbackFunc(item);
};

exports.dropCollection = function(){
	list = [];
};

