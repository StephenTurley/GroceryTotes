describe('GroceryListController', function(){
	
	var groceryList;
	var $rootScope;
	
	beforeEach(function(){
		module('app');
		
		inject(function(_groceryList_, _$rootScope_){
			groceryList = _groceryList_;
			$rootScope = _$rootScope_;
		});
	});
	
	describe('groceryList.fetchList', function(){
		
		it('should be a function', function(){
			expect(angular.isFunction(groceryList.fetchList)).toBe(true);
		});
		
		it('should return a promise with 3 items', function(){
			var result = groceryList.fetchList();
			
			var items = [];
			
			result.then(function(data){
				items = data;
			});
			
			$rootScope.$digest();
			
			expect(items.length).toBe(3);
		});
	});
});