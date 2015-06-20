/// <reference path="../../../typings/angularjs/angular.d.ts"/>
describe('GroceryListService', function(){
	
	var groceryList;
	var $rootScope;
	var $httpBackend;
	
	var mockList = [
		{ name: 'bread' },
		{ name: 'milk' },
		{ name: 'eggs' }
	];
		
	var mockItem = { 
		name : 'foo'
	};
	
	beforeEach(function(){
		module('app');
		
		inject(function(_groceryList_, _$rootScope_, _$httpBackend_){
			groceryList = _groceryList_;
			$rootScope = _$rootScope_;
			$httpBackend = _$httpBackend_;
		});
		
		$httpBackend.when('GET', '/api/list')
					.respond(mockList);
					
		$httpBackend.when('POST', 'api/list/item')
					.respond(mockItem);
					
		spyOn($rootScope,'$broadcast');
		
	});
	
	afterEach(function(){
		$rootScope.$broadcast.calls = [];
	});
	
	describe('fetchList', function(){
		
		it('should be a function', function(){
			expect(angular.isFunction(groceryList.fetchList)).toBe(true);
		});
		
		it('should return a promise from http.get("api/list")', function(){
			var result = groceryList.fetchList();
			$httpBackend.flush();
			
			var items = [];
			
			result.then(function(res){
				items = res.data;
			});
			
			$rootScope.$digest();
			
			expect(items).toEqual(mockList);
		});
	});
	describe('addItem', function(){
		
		it('should be a function', function(){
			expect(angular.isFunction(groceryList.addItem)).toBe(true);
		});
		
		it('should not emit itemAdded event until promise is resolved', function(){
			var result = groceryList.addItem(mockItem);
			
			expect($rootScope.$broadcast).not.toHaveBeenCalled();
		});
		
		it('should broadcast itemAdded event', function(){
			var result = groceryList.addItem(mockItem);
			$httpBackend.flush();
			
			$rootScope.$digest();
			
			expect($rootScope.$broadcast).toHaveBeenCalledWith('itemAdded');
		});
	});
	
});