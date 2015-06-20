describe('routes', function(){
	var $route;
	
	beforeEach(function(){
		module('app');
		
		inject(function(_$route_){
			$route = _$route_;
		});
	});
	
	describe('/', function(){
		it('should map to GroceryListController', function(){
			expect($route.routes['/'].controller).toBe('GroceryListController');
		});
		
		it('should use grocery-list.html template', function(){
			expect($route.routes['/'].templateUrl).toBe('grocery-list.html');
		});
	});
	
});