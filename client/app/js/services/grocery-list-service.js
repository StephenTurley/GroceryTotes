angular.module('app').factory('groceryList', ['$http', function($http){
	var service = {};
	
	service.fetchList = function(){
		return $http.get('/api/list');
	};
	
	return service;
}]);