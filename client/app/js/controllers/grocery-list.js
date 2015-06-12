angular.module('app').controller('GroceryListController',['$scope','groceryList', function($scope, groceryList){
	
	$scope.fetchList = function(){
		groceryList.fetchList().then(function(data){
			$scope.items = data;
		});
	};
	
}]);