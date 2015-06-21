angular.module('app').factory('groceryList', ['$http','$rootScope',
	 function($http, $rootScope){
		var service = {};
		
		service.fetchList = function(){
			return $http.get('/api/list');
		};
		
		service.addItem = function(item){
			$http.post('/api/item', item).then(function(res){
				itemAdded();
			});
		};
	
		function itemAdded(){
			$rootScope.$broadcast('itemAdded');
		}
		
		return service;
}]);