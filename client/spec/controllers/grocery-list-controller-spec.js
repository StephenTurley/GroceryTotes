describe('GroceryListController', function(){
	
	var $controller;
	
	beforeEach(function(){
		module('app');
	});
	
	beforeEach(inject(function(_$controller_){
		$controller = _$controller_;
	}));
	
	describe('$scope.items', function(){
		it('should have 3 items', function(){
			var $scope = {};
			var controller = $controller('GroceryListController', {$scope: $scope});
			expect($scope.items.length).toBe(3);
		});	
	});	
});