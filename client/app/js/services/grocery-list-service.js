angular.module('app').factory('groceryList', ['$q', function($q){
	var service = {};
	
	var deferred = $q.defer();
	deferred.resolve(
		[
			{name: 'bread'},
			{name: 'milk'},
			{name: 'eggs'}
		]
	);
	
	service.fetchList = function(){
		return deferred.promise;
	};
	
	return service;
}]);