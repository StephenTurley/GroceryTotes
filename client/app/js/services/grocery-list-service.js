angular.module('app').factory('groceryList', ['$http', function($http){
	var service = {};
	
	service.fetchList = function(){
		return $http.get('/api/list');
	};
	
	service.addItem = function(item){
		return $http.post('api/list/item', item);
	};
	
	return service;
}]);