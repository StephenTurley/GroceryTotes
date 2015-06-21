angular.module('app').controller('ItemController',['$scope', '$rootScope', 'groceryList', 
	function($scope, $rootScope, groceryList){
		
		var emptyItem = { name: ''};
		
		$scope.name = emptyItem.name;
		
		$scope.addItem = function(){
			var item = {
				name: $scope.name	
			};
			groceryList.addItem(item);
		};
		
		$rootScope.$on('itemAdded', function(){
			$scope.name = emptyItem.name;
		});
	}]);