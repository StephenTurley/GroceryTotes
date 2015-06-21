angular.module('app').controller('ItemController',['$scope', 'groceryList',
	function($scope, groceryList){
		$scope.item = {
			name: ''
		};
		$scope.addItem = function(){
			groceryList.addItem($scope.item);
		};
	}]);