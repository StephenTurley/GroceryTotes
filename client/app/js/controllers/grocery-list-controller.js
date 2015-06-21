angular.module('app').controller('GroceryListController',['$scope','groceryList','$rootScope',
	function($scope, groceryList, $rootScope){
		
		$scope.fetchList = function(){
			groceryList.fetchList().then(function(res){
				$scope.items = res.data;
			});
		};
		
		$rootScope.$on('itemAdded', function(){
			$scope.fetchList();
		});		
	}]);