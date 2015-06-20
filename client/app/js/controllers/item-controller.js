angular.module('app').controller('ItemController',['$scope', 'groceryList',
	function($scope, groceryList){
		$scope.addItem = function(item){
			groceryList.addItem(item);
		};
	}]);