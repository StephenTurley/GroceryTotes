describe('GroceryListService', function(){
	
	var groceryList;
	var $rootScope;
	var $httpBackend;
	
	var mockList = [
			{name: 'bread'},
			{name: 'milk'},
			{name: 'eggs'}
		];
	
	beforeEach(function(){
		module('app');
		
		inject(function(_groceryList_, _$rootScope_, _$httpBackend_){
			groceryList = _groceryList_;
			$rootScope = _$rootScope_;
			$httpBackend = _$httpBackend_;
		});
		
		$httpBackend.when('GET', '/api/list')
					.respond(mockList);
		
	});
	
	describe('groceryList.fetchList', function(){
		
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
});