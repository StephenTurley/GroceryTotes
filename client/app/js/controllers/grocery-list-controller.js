angular.module('app').controller('GroceryListController',['$scope','groceryList', function($scope, groceryList){
	
	$scope.fetchList = function(){
		groceryList.fetchList().then(function(res){
			$scope.items = res.data;
		});
	};
	
	$scope.addItem = function(item){
		groceryList.addItem(item);
	};
	
}]);