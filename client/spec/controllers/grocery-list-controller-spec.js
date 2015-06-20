/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
describe('GroceryListController', function(){
	
	var $rootScope;
	var $controller;
	var deferred;
	var $scope;
	var groceryList;
	
	var mockPromise = {
		data: [
			{name: 'foo'}
		]
	};
	
	beforeEach(function(){
		module('app');
	});
	
	beforeEach(inject(function(_$controller_,_$rootScope_, $q){
		$controller = _$controller_;
		$rootScope = _$rootScope_;
		deferred = $q.defer();
	}));
		
	beforeEach(function(){
		$scope = {};
		
		groceryList = {
			fetchList : function(){}
		};
		
		$controller('GroceryListController', {$scope: $scope, groceryList: groceryList});
		
		spyOn(groceryList, 'fetchList').andReturn(deferred.promise);
		spyOn($scope, 'fetchList').andCallThrough();
	});
	
	afterEach(function(){
		groceryList.fetchList.calls = [];
		$scope.fetchList.calls = [];
	});
	
	describe('fetchList', function(){
		
		afterEach(function(){
			groceryList.fetchList.reset();
		});

		it('should call groceryList.fectchList', function(){
			
			$scope.fetchList();
			
			expect(groceryList.fetchList).toHaveBeenCalled();
		});
		
		it('should set items on success', function(){
			deferred.resolve(mockPromise);
						
			$scope.fetchList();
			$rootScope.$digest();
			
			expect($scope.items[0].name).toBe('foo');
		});
		
		it('should be called on itemAdded event', function(){
			$rootScope.$broadcast('itemAdded');
			
			$rootScope.$digest();
			
			expect($scope.fetchList).toHaveBeenCalled();
		});
	});
});