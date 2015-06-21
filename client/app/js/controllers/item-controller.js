angular.module('app').controller('ItemController',['$scope', '$rootScope', 'groceryList', 
	function($scope, $rootScope, groceryList){
		
		var emptyItem = { name: ''};
		
		$scope.item = emptyItem;
		
		$scope.addItem = function(){
			groceryList.addItem($scope.item);
		};
		
		$rootScope.$on('itemAdded', function(){
			$scope.item = emptyItem;
		});
	}]);