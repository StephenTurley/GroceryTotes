/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
describe('GroceryListController', function(){
	
	var $rootScope;
	var $controller;
	var deferred;
	
	var mockPromise = {
		data: 'foo'
	};
	
	beforeEach(function(){
		module('app');
	});
	
	beforeEach(inject(function(_$rootScope_, _$controller_, $q){
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		deferred = $q.defer();
	}));
	
	describe('groceryListController.fetchList', function(){
		
		var $scope, groceryList;
		
		beforeEach(function(){
			$scope = {};
			
			groceryList = {
				fetchList : function(){}
			};
			
			$controller('GroceryListController', {$scope: $scope, groceryList: groceryList});
			
			spyOn(groceryList, 'fetchList').andReturn(deferred.promise);
		});
		
		afterEach(function(){
			groceryList.fetchList.reset();
		});

		it('should call grocery list service', function(){
			
			$scope.fetchList();
			
			expect(groceryList.fetchList).toHaveBeenCalled();
		});
		
		it('should set items on success', function(){
			deferred.resolve(mockPromise);
						
			$scope.fetchList();
			$rootScope.$digest();
			
			expect($scope.items).toBe('foo');
			
		});	
	});	
});