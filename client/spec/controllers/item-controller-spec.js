describe('ItemController', function(){
	var $controller;
	var $scope;
	var groceryList;
	var deffered; 
	
	beforeEach(function(){
		module('app');
	});
	
	beforeEach(inject(function(_$controller_, $q){
		$controller = _$controller_;
		deffered = $q.defer();
		$scope = {};
		groceryList = {
			addItem : function(item){}
		};
		
		$controller('ItemController', {
			$scope : $scope,
			groceryList: groceryList
		});
		
		spyOn(groceryList, 'addItem').andReturn(deffered.promise);
	}));
	
	afterEach(function(){
		groceryList.addItem.calls = [];
	});
	
	describe('addItem', function(){
		var item = { name: "foo" };
		
		it('should call groceryList.addItem', function(){
			$scope.addItem(item);
			
			expect(groceryList.addItem).toHaveBeenCalledWith(item);
		});
	});
	
});